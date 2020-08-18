<template>
		<mdb-container>
			<Products />
			<div class="my-5">
				<mdb-pagination class=" mx-auto" style="width: 150px">
					<mdb-page-nav prev disabled></mdb-page-nav>
					<mdb-page-item active>1</mdb-page-item>
					<mdb-page-nav next disabled></mdb-page-nav>
				</mdb-pagination>
			</div>
		</mdb-container>
</template>

<script>
	import { mdbContainer, mdbPagination, mdbPageItem, mdbPageNav } from 'mdbvue'
	import Products from '../components/Products/Products'

	export default {
		components: {
			Products,
			mdbContainer,
			mdbPagination,
			mdbPageItem,
			mdbPageNav,
		},
	}
</script>

<style></style>
