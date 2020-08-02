import axios from 'axios'

const state = {
	products: [],
}

const getters = {
	products: state => state.products,
}

const actions = {
	fetchPP({ commit }) {
		axios
			.get('/api/products/public')
			.then(res => {
				console.log(res.data)
				commit('SET_PRODUCTS', res.data.products)
			})
			.catch(err => console.log(err))
	},
	fetchProducts({ commit }) {
		axios
			.get('/api/products')
			.then(res => {
				commit('SET_PRODUCTS', res.data.products)
			})
			.catch(err => console.log(err))
	},
}

const mutations = {
	SET_PRODUCTS(state, products) {
		state.products = products
	},
}

export default {
	state,
	getters,
	actions,
	mutations,
}
