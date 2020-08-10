<template>
	<div class="mt-5 p-5">
		<mdb-container>
			<Jobs />
		</mdb-container>
	</div>
</template>

<script>
	import { mdbContainer } from 'mdbvue'
	import Jobs from '../components/Jobs/Jobs'
	export default {
		components: {
			mdbContainer,
			Jobs,
		},
	}
</script>

<style></style>
