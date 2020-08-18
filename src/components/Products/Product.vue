<template>
	<mdb-card style="width: 250px">
		<mdb-card-image :src="url + product.imageUrl" alt="Card image cap"></mdb-card-image>
		<mdb-card-body>
			<mdb-card-title>{{ product.title }}</mdb-card-title>
			<mdb-card-text>{{ product.description }}</mdb-card-text>

			<!-- <mdb-btn size="sm" class="w-100" color="info">Edit</mdb-btn> -->

			<mdb-btn @click="printJob(product._id)" size="sm" class="w-100" color="primary">Print</mdb-btn>

			<mdb-btn @click="removeProduct" size="sm" class="w-100" color="danger"
				>Delete</mdb-btn
			>
		</mdb-card-body>
	</mdb-card>
</template>

<script>
	import {
		mdbCard,
		mdbCardImage,
		mdbCardBody,
		mdbCardTitle,
		mdbCardText,
		mdbBtn,
	} from 'mdbvue'
	import { mapActions, mapGetters } from 'vuex'

	export default {
		props: ['product'],
		computed: {
			...mapGetters(['url']),
		},
		methods: {
			...mapActions(['deleteProduct', 'createJob']),
			removeProduct() {
				this.deleteProduct(this.product._id)
			},
			printJob(productId) {
				this.createJob(productId)
			},
		},
		components: {
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbBtn,
		},
	}
</script>

<style></style>
