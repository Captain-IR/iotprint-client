<template>
	<mdb-navbar position="top" color="orange" scrolling class="navbar-light lighten-5">
		<mdb-navbar-brand href="https://sourcelink.co.uk" target="_blank">
			Sourcelink
		</mdb-navbar-brand>
		<mdb-navbar-toggler>
			<mdb-navbar-nav center color="blue-grey">
				<mdb-nav-item :to="{ name: 'home' }" waves-fixed active class="active"
					>Home
				</mdb-nav-item>
				<mdb-nav-item :to="{ name: 'about' }" waves-fixed active class="active"
					>About
				</mdb-nav-item>
				<mdb-nav-item :to="{ name: 'dashboard' }" waves-fixed active class="active"
					>Dashboard
				</mdb-nav-item>
			</mdb-navbar-nav>
			<mdb-navbar-nav right color="blue-grey">
				<mdb-nav-item :to="{ name: 'login' }" waves-fixed active class="active"
					>Login
				</mdb-nav-item>
			</mdb-navbar-nav>
		</mdb-navbar-toggler>
	</mdb-navbar>
</template>

<script>
	import {
		mdbNavbar,
		mdbNavbarBrand,
		mdbNavItem,
		mdbNavbarNav,
		mdbNavbarToggler,
	} from 'mdbvue'

	export default {
		name: 'Header',
		components: {
			mdbNavbar,
			mdbNavbarBrand,
			mdbNavItem,
			mdbNavbarNav,
			mdbNavbarToggler,
		},
	}
</script>

<style></style>
