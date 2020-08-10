<template>
	<tr>
		<th>{{ index + 1 }}</th>
		<td>{{ job.product.title }}</td>
		<td>{{ dateFormat() }}</td>
		<td>{{ job.status }}</td>
		<td v-if="job.status === 'standby'">
			<mdb-btn 
			@click="cancelJob" 
			color="danger" 
			class="p-1 m-0 customBtnFont"
				>Cancel</mdb-btn
			>
		</td>
	</tr>
</template>

<script>
	import { mdbBtn } from 'mdbvue'
	import { mapActions } from 'vuex'
	export default {
		props: ['job', 'index'],
		methods: {
			...mapActions(['deleteJob']),

			cancelJob() {
				this.deleteJob(this.job._id)
			},

			dateFormat() {
				const createdAt = new Date(this.job.createdAt)
				const newFormat = `${createdAt.getDate()}/${createdAt.getMonth() +
					1}/${createdAt.getFullYear()} at ${createdAt.getHours()}:${createdAt.getMinutes()}`
				return newFormat
			},
		},
		components: {
			mdbBtn,
		},
	}
</script>

<style>
	.customBtnFont {
		font-size: 10px;
	}
</style>
