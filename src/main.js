import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import 'vue-toast-notification/dist/theme-sugar.css'
import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueToast, {
	duration: 2000,
	position: 'top',
	dismissible: true,
	queue: true,
})

require('@/store/subscriber')

// axios.defaults.baseURL = 'http://localhost:5000/api'
axios.defaults.baseURL = 'https://iotprint-server.herokuapp.com/api'

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
	new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount('#app')
})
