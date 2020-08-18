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
				// console.log(err)
				Vue.$toast.error(err.response.data.message)
			}
		},
		async fetchProducts({ commit }) {
			try {
				this.state.isLoading = true
				const res = await axios.get('/products')
				commit('SET_PRODUCTS', res.data.products)
			} catch (err) {
				// console.log(err)
				Vue.$toast.error(err.response.data.message)
			}
		},
		async createProduct({ state }, { title, description, file, image }) {
			const formData = new FormData()
			formData.append('title', title)
			formData.append('description', description)
			formData.append('gcode', file)
			formData.append('image', image)
			try {
				state.uploading = true
				const res = await axios.post('/product/create', formData, {
					onUploadProgress: e =>
						(state.progress = Math.round((e.loaded * 100) / e.total)),
				})
				// console.log(res)
				Vue.$toast.success(res.data.message + ', Redirecting...')
				setTimeout(() => {
					state.uploading = false
					state.progress = 0
					router.replace('repository')
				}, 2000)
			} catch (err) {
				// console.log(err)
				Vue.$toast.error(err.response.data.message)
				state.uploading = false
			}
		},
		async createJob(_, productId) {
			try {
				// console.log(productId)
				const res = await axios.post('/job/create', { productId })
				// console.log(res)
				Vue.$toast.info(res.data.message)
				router.replace('jobs')
			} catch (err) {
				// console.log(err.response.data)
				Vue.$toast.error('Please login first!')
				// Vue.$toast.error(err.response.data.message)
			}
		},
		async deleteProduct({ dispatch }, productId) {
			try {
				const res = await axios.delete('/product/' + productId)
				// console.log(res)
				Vue.$toast.warning(res.data.message)
				dispatch('fetchProducts')
			} catch (err) {
				// console.log(err)
				Vue.$toast.error(err.response.data.message)
			}
		},
	},
}
