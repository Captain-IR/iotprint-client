<template>
	<div class="flexible-content overflow-auto">
		<Header></Header>
		<main>
			<div class="mt-5 p-5">
				<router-view></router-view>
			</div>
		</main>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './components/Header'
	import Footer from './components/Footer'
	export default {
		name: 'App',
		components: {
			Header,
			Footer,
		},
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
</style>
