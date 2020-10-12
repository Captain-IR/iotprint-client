<template>
  <mdb-footer color="indigo" class="position-fixed font-small mt-4 w-100">
    <div class="footer-copyright text-center py-2">
      <mdb-container fluid>
        &copy; 2020 Copyright: IoTprint, Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
          >Freepik</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com</a
        >
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
import { mdbFooter, mdbContainer } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
  },
};
</script>

<style></style>
