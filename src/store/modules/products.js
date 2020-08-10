import axios from 'axios'
import router from '../../router'

export default {
	state: {
		pp: [],
		products: [],
		isLoading: true,
	},

	getters: {
		pp: state => state.pp,
		products: state => state.products,
		isLoading: state => state.isLoading,
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
				const res = await axios.get('/api/products/public')
				commit('SET_PP', res.data.products)
			} catch (err) {
				console.log(err)
			}
		},
		async fetchProducts({ commit }) {
			try {
				this.state.isLoading = true
				const res = await axios.get('/api/products')
				commit('SET_PRODUCTS', res.data.products)
			} catch (err) {
				console.log(err)
			}
		},
		async createProduct(_, { title, description, file, image }) {
			const formData = new FormData()
			formData.append('title', title)
			formData.append('description', description)
			formData.append('gcode', file)
			formData.append('image', image)
			try {
				const res = await axios.post('/api/product/create', formData)
				console.log(res)
				router.replace('repository')
			} catch (err) {
				console.log(err)
			}
		},
		async createJob(_, productId) {
			try {
				console.log(productId)
				const res = await axios.post('/api/job/create', { productId })
				console.log(res)
				router.replace('jobs')
			} catch (err) {
				console.log(err)
			}
		},
		async deleteProduct({ dispatch }, productId) {
			try {
				const res = await axios.delete('/api/product/' + productId)
				console.log(res)
				dispatch('fetchProducts')
			} catch (err) {
				console.log(err)
			}
		},
	},
}
