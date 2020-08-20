<template>
	<mdb-footer color="indigo" class=" position-fixed font-small mt-4 w-100">
		<div class="footer-copyright text-center py-2">
			<mdb-container fluid>
				&copy; 2020 Copyright: IoTprint
			</mdb-container>
		</div>
	</mdb-footer>
</template>

<script>
	import { mdbFooter, mdbContainer } from 'mdbvue'
	export default {
		name: 'FooterPage',
		components: {
			mdbFooter,
			mdbContainer,
		},
	}
</script>

<style></style>
