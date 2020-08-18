<template>
	<div class="mt-4 p-5">
		<mdb-container>
			<mdb-row>
				<mdb-col class="col-xl-4"></mdb-col>
				<mdb-col col="12" class="col-xl-4">
					<form>
						<p class="h4 text-center mb-2">Sign Up</p>
						<div class="grey-text">
							<mdb-input v-model="username" label="Your name" icon="user" type="text" />

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

							<mdb-input
								v-model="confirmPassword"
								label="Confirm password"
								icon="exclamation-triangle"
								type="password"
							/>
						</div>

						<div class="text-center">
							<mdb-btn @click="register" color="primary" class="w-100">Register</mdb-btn>
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
		name: 'signup',
		data() {
			return {
				username: '',
				email: '',
				password: '',
				confirmPassword: '',
			}
		},
		methods: {
			...mapActions({
				signup: 'auth/signup',
			}),
			register() {
				this.signup({
					username: this.username,
					email: this.email,
					password: this.password,
					confirmPassword: this.confirmPassword,
				})
			},
		},
		components: {
			mdbContainer,
			mdbInput,
			mdbBtn,
			mdbRow,
			mdbCol,
		},
	}
</script>

<style></style>
