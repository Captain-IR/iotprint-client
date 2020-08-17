<template>
	<div>
		<mdb-row v-if="jobLoading">
			<div class="spinner-border mx-auto" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</mdb-row>

		<mdb-tbl v-else class="w-75 mx-auto">
			<mdb-tbl-head>
				<tr>
					<th>#</th>
					<th>Product</th>
					<th>Date</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</mdb-tbl-head>

			<mdb-tbl-body v-for="(job, index) in jobs" :key="index">
				<Job :job="job" :index="index"/>
			</mdb-tbl-body>
			
		</mdb-tbl>
	</div>
</template>

<script>
	import { mdbTbl, mdbTblHead, mdbTblBody, mdbRow } from 'mdbvue'
	import Job from './Job'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: {
			...mapGetters(['jobs', 'jobLoading']),
		},
		methods: {
			...mapActions(['fetchJobs']),
		},
		created() {
			this.fetchJobs()
		},
		components: {
			Job,
			mdbTbl,
			mdbTblHead,
			mdbTblBody,
			mdbRow,
		},
	}
</script>

<style></style>
