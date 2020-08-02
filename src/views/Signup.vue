<template>
	<div class="mt-5 p-5">
		<mdb-container fluid grid-list-xl>
			<mdb-row>
				<mdb-col col="4"></mdb-col>
				<mdb-col col="4">
					<form>
						<p class="h4 text-center mb-4">Sign up</p>
						<div class="grey-text">
							<mdb-input label="Your name" icon="user" type="text" />
							<mdb-input label="Your email" icon="envelope" type="email" />
							<mdb-input label="Your password" icon="lock" type="password" />
						</div>
						<div class="text-center">
							<mdb-btn color="primary">Register</mdb-btn>
						</div>
					</form>
				</mdb-col>
				<mdb-col col="4"></mdb-col>
			</mdb-row>
		</mdb-container>
	</div>
</template>

<script>
	import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn } from 'mdbvue'
	export default {
		name: 'signup',
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
