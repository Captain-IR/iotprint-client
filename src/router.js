import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Docs from './views/Docs.vue'
import Upload from './views/Upload.vue'
import Repository from './views/Repository.vue'
import Jobs from './views/Jobs.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'

import store from '@/store'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
		{
			path: '/docs',
			name: 'docs',
			component: Docs,
		},
		{
			path: '/upload',
			name: 'upload',
			component: Upload,
			beforeEnter: (to, from, next) => {
				if (!store.getters['auth/authenticated']) {
					return next({
						name: 'login',
					})
				}
				next()
			},
		},
		{
			path: '/repository',
			name: 'repository',
			component: Repository,
			beforeEnter: (to, from, next) => {
				if (!store.getters['auth/authenticated']) {
					return next({
						name: 'login',
					})
				}
				next()
			},
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: Jobs,
			beforeEnter: (to, from, next) => {
				if (!store.getters['auth/authenticated']) {
					return next({
						name: 'login',
					})
				}
				next()
			},
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/signup',
			name: 'signup',
			component: Signup,
		},
		{ path: '*', redirect: { name: 'home' } },
	],
})

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some(record => record.meta.requiresAuth)) {
// 		console.log(store.getters)
// 		if (!store.getters['auth/authenticated']) {
// 			return next({
// 				name: 'login',
// 			})
// 		}

// 		return next()
// 	}
// })

export default router
