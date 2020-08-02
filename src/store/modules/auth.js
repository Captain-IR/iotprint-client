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
		}
	},

	mutations: {
		SET_TOKEN(state, token) {
			state.token = token
		},
		SET_USER(state, user) {
			state.user = user
		},
		setLogout(state) {
			state.token = ''
		},
	},

	actions: {
		signup(_, credentials) {
			axios
				.post('/auth/signup', {
					email: credentials.email,
					password: credentials.password,
					username: credentials.username,
				})
				.then(() => {
					router.push('/login')
				})
				.catch(err => console.log(err))
		},
		async login({ dispatch }, credentials) {
			let res = await axios.post('/auth/login', {
				email: credentials.email,
				password: credentials.password,
			})
			// localStorage.setItem('token', res.data.token)
			// commit('SET_TOKEN', res.data)
			// router.push('/repository')
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
		logout({ commit, state }) {
			if (!state.token) {
				return
			}
			return axios
				.post('/auth/logout')
				.then(() => {
					commit('SET_TOKEN', null)
					commit('SET_USER', null)
				})
				.catch(err => console.log(err))
		},
	},

	
}
