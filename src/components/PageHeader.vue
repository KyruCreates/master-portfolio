<template>
  <header class="Main__header">
    <h1 class="Main__header__title mb-1">Kendall Eng</h1>
    <h2 class="page-header__subtitle mb-1">Creative</h2>
    <!-- Navbar -->
    <MDBNavbar expand="lg" light bg="gray" container id="nav">
      <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
      <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
        <MDBNavbarItem to="/" active>
          <router-link to="/">Home</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem to="/photo">
          <router-link to="/photo">Photography</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem to="/games">
          <router-link to="/games">Game Design</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem to="/art">
          <router-link to="/art">Art</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem to="/music">
          <router-link to="/music">Music</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem to="/about">
          <router-link to="/about">About</router-link>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBNavbar>
  </header>
</template>

<script>
  import { MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem
    },
  };
</script>
