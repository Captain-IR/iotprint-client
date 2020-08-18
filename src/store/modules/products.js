import Vue from 'vue'
import axios from 'axios'
import router from '../../router'

export default {
	state: {
		pp: [],
		products: [],
		isLoading: true,
		uploading: null,
		progress: null,
	},

	getters: {
		pp: state => state.pp,
		products: state => state.products,
		isLoading: state => state.isLoading,
		uploading: state => state.uploading,
		progress: state => state.progress,
	},

	mutations: {
		SET_PP(state, products) {
			state.pp = products
			state.isLoading = false
		},
		SET_PRODUCTS(state, products) {
			state.products = products
			state.isLoading = false
		},
	},

	actions: {
		async fetchPP({ commit, state }) {
			try {
				state.isLoading = true
				const res = await axios.get('/products/public')
				commit('SET_PP', res.data.products)
			} catch (err) {
				console.log(err)
			}
		},
		async fetchProducts({ commit }) {
			try {
				this.state.isLoading = true
				const res = await axios.get('/products')
				commit('SET_PRODUCTS', res.data.products)
			} catch (err) {
				console.log(err)
			}
		},
		async createProduct({ state }, { title, description, file, image }) {
			const formData = new FormData()
			formData.append('title', title)
			formData.append('description', description)
			formData.append('stl', file)
			formData.append('image', image)
			try {
				state.uploading = true
				const res = await axios.post('/product/create', formData, {
					onUploadProgress: e =>
						(state.progress = Math.round((e.loaded * 100) / e.total)),
				})
				console.log(res)
				Vue.$toast.success('Uploading Successfully Redirecting...')
				setTimeout(() => {
					state.uploading = false
					router.replace('repository')
				}, 2000);
			} catch (err) {
				console.log(err)
				Vue.$toast.error('Validation Failed!')
				state.uploading = false
			}
		},
		async createJob(_, productId) {
			try {
				console.log(productId)
				const res = await axios.post('/job/create', { productId })
				console.log(res)
				Vue.$toast.info('Print Job Created')
				router.replace('jobs')
			} catch (err) {
				console.log(err.response.data)
				Vue.$toast.error('Please Login First!')
			}
		},
		async deleteProduct({ dispatch }, productId) {
			try {
				const res = await axios.delete('/product/' + productId)
				console.log(res)
				Vue.$toast.warning('Product Deleted')
				dispatch('fetchProducts')
			} catch (err) {
				console.log(err)
				Vue.$toast.error('Something Went Wrong!')
			}
		},
	},
}
