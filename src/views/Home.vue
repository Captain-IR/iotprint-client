<template>
	<div class="mt-5 p-5">
		<mdb-container fluid>
			<mdb-card class="mb-4">
				<mdb-card-body>
					Choose one from below models or <strong>Sign Up</strong> then
					<strong>Login</strong> to start printing your models.
				</mdb-card-body>
			</mdb-card>
			<mdb-row>
				<mdb-card-group deck>
					<mdb-card v-for="(product, index) in products" :key="index">
						<mdb-card-image
							:src="url + product.imageUrl"
							alt="Product"
						></mdb-card-image>
						<mdb-card-body>
							<mdb-card-title>{{ product.title }}</mdb-card-title>
							<mdb-card-text>{{ product.description }}</mdb-card-text>
							<mdb-btn color="primary">Print</mdb-btn>
						</mdb-card-body>
					</mdb-card>
				</mdb-card-group>
			</mdb-row>
		</mdb-container>
	</div>
</template>

<script>
	import {
		mdbContainer,
		mdbRow,
		mdbCard,
		mdbCardImage,
		mdbCardBody,
		mdbCardTitle,
		mdbCardText,
		mdbCardGroup,
		mdbBtn,
	} from 'mdbvue'

	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'home',
		data() {
			return {
				url: 'http://localhost:5000/'
			}
		},
		methods: {
			...mapActions(['fetchPP']),
		},
		computed: {
			...mapGetters(['products']),
		},
		created() {
			this.fetchPP()
		},
		components: {
			mdbContainer,
			mdbRow,
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardGroup,
			mdbBtn,
		},
	}
</script>

<style>
</style>
