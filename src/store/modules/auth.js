import axios from 'axios'
import router from '../../router'

export default {
	namespaced: true,

	state: {
		token: null,
		user: null,
	},

	getters: {
		authenticated(state) {
			return state.token && state.user
		},

		user(state) {
			return state.user
		},
	},

	mutations: {
		SET_TOKEN(state, token) {
			state.token = token
		},
		SET_USER(state, user) {
			state.user = user
		},
	},

	actions: {
		signup(_, credentials) {
			axios
				.post('/auth/signup', credentials)
				.then(() => {
					router.replace('login')
				})
				.catch(err => console.log(err))
		},

		async login({ dispatch }, credentials) {
			let res = await axios.post('/auth/login', credentials)
			return dispatch('attempt', res.data.token)
		},

		async attempt({ commit, state }, token) {
			if (token) {
				commit('SET_TOKEN', token)
				// Headers set by subscriber
			}

			if (!state.token) {
				return
			}

			try {
				let res = await axios.get('/auth/me')

				commit('SET_USER', res.data.user)
			} catch (err) {
				commit('SET_TOKEN', null)
				commit('SET_USER', null)
			}
		},

		async logout({ commit, state }) {
			if (!state.token) {
				return
			}
			try {
				await axios.post('/auth/logout')
				commit('SET_TOKEN', null)
				commit('SET_USER', null)
			} catch (err) {
				console.log(err)
			}
		},
	},
}
