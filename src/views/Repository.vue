<template>
	<div class="mt-5 p-5">
		<mdb-container>
			<Products />
		</mdb-container>
	</div>
</template>

<script>
	import { mdbContainer } from 'mdbvue'
	import Products from '../components/Products/Products'

	export default {
		components: {
			Products,
			mdbContainer,
		},
	}
</script>

<style></style>
