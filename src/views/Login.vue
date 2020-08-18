<template>
	<div class="mt-5 p-5">
		<mdb-container>
			<mdb-row>
				<mdb-col class="col-xl-4"></mdb-col>
				<mdb-col col="12" class="col-xl-4">
					<form>
						<p class="h4 text-center mb-4">Login</p>
						<div class="grey-text">
							<mdb-input
								v-model="email"
								label="Your email"
								icon="envelope"
								type="email"
							/>
							<mdb-input
								v-model="password"
								label="Your password"
								icon="lock"
								type="password"
							/>
						</div>
						<div class="text-center">
							<mdb-btn @click.native.prevent="submit" color="secondary" class="w-100"
								>Login</mdb-btn
							>
						</div>
					</form>
				</mdb-col>
				<mdb-col class="col-xl-4"></mdb-col>
			</mdb-row>
		</mdb-container>
	</div>
</template>

<script>
	import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn } from 'mdbvue'

	import { mapActions } from 'vuex'

	export default {
		name: 'login',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbBtn,
			mdbInput,
		},
		data() {
			return {
				email: '',
				password: '',
			}
		},
		methods: {
			...mapActions({
				login: 'auth/login',
			}),
			submit() {
				this.login({ email: this.email, password: this.password })
					.then(() => {
						this.$router.replace({
							name: 'repository',
						})
					})
					.catch(err => {
						console.log(err)
					})
			},
		},
	}
</script>

<style></style>
