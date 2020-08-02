<template>
	<div class="flexible-content">
		<Header></Header>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
	import Header from './components/Header'
	export default {
		name: 'App',
		components: {
			Header,
		},
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
</style>
