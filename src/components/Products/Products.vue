<template>
	<div>
		<mdb-row v-if="products.length === 0">
			<mdb-col class="mx-auto">
				<mdb-card class="mb-4">
					<mdb-card-body>
						You don't have any models,
						<router-link :to="{ name: 'upload' }">Upload</router-link> now.
					</mdb-card-body>
				</mdb-card>
			</mdb-col>
		</mdb-row>
		<mdb-row v-if="isLoading">
			<div class="spinner-border mx-auto" role="status">
					<span class="sr-only">Loading...</span>
				</div>
		</mdb-row>
		<mdb-card-group v-else deck>
			<div v-for="(product, index) in products" :key="index">
				<Product :product="product" />
			</div>
		</mdb-card-group>
	</div>
</template>

<script>
	import { mdbCardGroup, mdbRow, mdbCol, mdbCard, mdbCardBody } from 'mdbvue'
	import { mapGetters, mapActions } from 'vuex'
	import Product from './Product'

	export default {
		methods: {
			...mapActions(['fetchProducts']),
		},
		computed: {
			...mapGetters(['products', 'isLoading']),
		},
		created() {
			this.fetchProducts()
		},
		components: {
			Product,
			mdbCardGroup,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardBody,
		},
	}
</script>

<style></style>
