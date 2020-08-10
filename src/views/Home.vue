<template>
	<div class="mt-5 p-5">
		<mdb-container>
			<mdb-row v-if="!authenticated">
				<mdb-col>
					<mdb-card class="mb-4">
						<mdb-card-body>
							Choose one from below models then
							<router-link :to="{ name: 'signup' }">Sign Up</router-link> or
							<router-link :to="{ name: 'login' }">Login</router-link> to start printing
							now.
						</mdb-card-body>
					</mdb-card>
				</mdb-col>
			</mdb-row>
			<mdb-row v-if="isLoading">
				<div class="spinner-border mx-auto" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</mdb-row>
			<mdb-row v-else>
				<mdb-col>
					<mdb-card-group deck>
						<mdb-card v-for="(product, index) in pp" :key="index">
							<mdb-card-image
								:src="url + product.imageUrl"
								alt="Product"
							></mdb-card-image>
							<mdb-card-body>
								<mdb-card-title>{{ product.title }}</mdb-card-title>
								<mdb-card-text>{{ product.description }}</mdb-card-text>
								<mdb-btn @click="printJob(product._id)" class="w-100" color="primary"
									>Print now!</mdb-btn
								>
							</mdb-card-body>
						</mdb-card>
					</mdb-card-group>
				</mdb-col>
			</mdb-row>
		</mdb-container>
	</div>
</template>

<script>
	import {
		mdbContainer,
		mdbRow,
		mdbCol,
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
		methods: {
			...mapActions(['fetchPP', 'createJob']),
			printJob(productId) {
				this.createJob(productId)
			},
		},
		computed: {
			...mapGetters({
				pp: 'pp',
				isLoading: 'isLoading',
				url: 'url',
				authenticated: 'auth/authenticated',
			}),
		},
		created() {
			this.fetchPP()
		},
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
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

<style></style>
