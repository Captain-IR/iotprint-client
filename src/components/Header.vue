<template>
  <mdb-navbar position="top" scrolling color="indigo" dark>
    <mdb-navbar-brand href="https://iotprint.netlify.app/">
      IoTprint
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav color="blue-grey">
        <template v-if="authenticated">
          <mdb-nav-item :to="{ name: 'upload' }" waves-fixed
            >Upload
          </mdb-nav-item>
          <mdb-nav-item :to="{ name: 'repository' }" waves-fixed
            >Repository
          </mdb-nav-item>
          <mdb-nav-item :to="{ name: 'jobs' }" waves-fixed>Jobs </mdb-nav-item>
        </template>
      </mdb-navbar-nav>
      <mdb-navbar-nav right color="blue-grey">
        <mdb-nav-item :to="{ name: 'home' }" waves-fixed>Home </mdb-nav-item>
        <mdb-nav-item :to="{ name: 'about' }" waves-fixed>About </mdb-nav-item>
        <mdb-nav-item :to="{ name: 'docs' }" waves-fixed>Docs </mdb-nav-item>
        <template v-if="!authenticated">
          <mdb-nav-item :to="{ name: 'login' }" waves-fixed
            >Login
          </mdb-nav-item>
          <mdb-nav-item :to="{ name: 'signup' }" waves-fixed
            >SignUp
          </mdb-nav-item>
        </template>
        <mdb-nav-item v-if="user" waves-fixed>{{ user.email }}</mdb-nav-item>
        <mdb-nav-item v-if="authenticated" waves-fixed
          ><a @click="logout">Logout</a>
        </mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
} from "mdbvue";

export default {
  name: "Header",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      logoutAction: "auth/logout",
    }),
    logout() {
      this.logoutAction()
        .then(() => {
          this.$router.replace({
            name: "login",
          });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
</style>
