import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import products from './modules/products'
import jobs from './modules/jobs'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		url: 'https://iotprint-api.herokuapp.com/',
		// url: 'http://localhost:5000/',
	},
	getters: {
		url: state => state.url,
	},
	modules: {
		auth,
		products,
		jobs,
	},
})
