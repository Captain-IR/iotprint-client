import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

require('@/store/subscriber')

axios.defaults.baseURL = 'https://iotprint-server.herokuapp.com/api'
// axios.defaults.baseURL = 'http://localhost:5000/api'

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
	new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount('#app')
})
