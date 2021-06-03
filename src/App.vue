<template>
  <div class="Main">
    <PageHeader />
    <router-view />
    <footer class="Main__footer">
      <p>Originally created for UW Certificate in Front-End Web Development. Updated often.</p>
    </footer>
  </div>
</template>

<script>
  // Import components
  import PageHeader from './components/PageHeader.vue';

  export default {
    name: 'Main',
    components: { PageHeader }
  }
</script>

<style lang="scss">
  // Import Roboto and Courgette fonts
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Courgette&family=Roboto&display=swap');

  // Colors
  $white: #FFFFFF;
  $red: #F1352B;
  $purple: #6E27C5;
  $gray: #c2c2c2;
  $darkergray: #8a8a8a;
  $darkgray: #404040;
  $black: #000000;
  $darkred: #8c0d0d;
  $robins: #01c1d6;
  $blue: #150f96;
  $lightblue: #69a7ff;

  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $white;
    background-color: $black;
  }

  #nav {
    margin: 1rem;
    a {
      font-weight: bold;
      color: $purple;

      &.router-link-exact-active {
        color: $lightblue;
      }
    }
  }
</style>
