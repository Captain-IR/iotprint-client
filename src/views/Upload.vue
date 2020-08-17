<template>
	<div class="mt-5 p-5">
		<mdb-container>
			<mdb-row>
				<mdb-col col="2"></mdb-col>
				<mdb-col>
					<mdb-card>
						<mdb-card-body>
							<form @submit.prevent="upload" enctype="multipart/form-data">
								<p class="h4 text-center mb-4">Upload Model</p>
								<div class="grey-text">
									<label>Title</label>
									<input v-model="title" type="text" class="form-control" />

									<label class="mt-3" for="description">Description</label>
									<mdb-input
										v-model="description"
										class="m-0"
										type="textarea"
										:rows="5"
										outline
									/>

									<label>Choose an STL Model</label><br />
									<input ref="file" @change="selectFile" type="file" /><br />

									<label>Choose an Image</label><br />
									<input ref="image" @change="selectImage" type="file" />
								</div>
								<div class="text-center">
									<button class="btn btn-info">Upload</button>
								</div>
							</form>
						</mdb-card-body>
					</mdb-card>
				</mdb-col>
				<mdb-col col="2"></mdb-col>
			</mdb-row>
		</mdb-container>
	</div>
</template>

<script>
	import { mdbContainer, mdbInput, mdbCard, mdbCardBody, mdbRow, mdbCol } from 'mdbvue'

	import { mapActions } from 'vuex'

	export default {
		name: 'upload',
		data() {
			return {
				title: '',
				description: '',
				file: '',
				image: '',
			}
		},
		methods: {
			...mapActions(['createProduct']),
			selectFile() {
				this.file = this.$refs.file.files[0]
			},

			selectImage() {
				this.image = this.$refs.image.files[0]
			},
			upload() {
				console.log('inside upload')
				this.createProduct({
					title: this.title,
					description: this.description,
					file: this.file,
					image: this.image,
				})
			},
		},
		components: {
			mdbInput,
			mdbCard,
			mdbCardBody,
			mdbContainer,
			mdbRow,
			mdbCol,
		},
	}
</script>

<style></style>
