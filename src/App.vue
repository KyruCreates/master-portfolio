<template>
  <div class="Main">
    <PageHeader />
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
  // Import components
  import PageHeader from './components/PageHeader.vue';
  import PageFooter from './components/PageFooter.vue';

  export default {
    name: 'Main',
    components: { PageHeader, PageFooter }
  }
</script>

<style lang="scss">
  // Import MDB stylesheet
  @import '~mdb-ui-kit/css/mdb.min.css';
  // Import partials
  @import './styles/_settings.responsive';
  @import './styles/_settings.variables';
  @import './styles/_base.normalize';
  // Import Roboto and Courgette fonts
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Courgette&family=Roboto&display=swap');

  // responsive sizing for "screen and (max-width: 767px)"
  @include media-query('mobile') {
    // General Styling
    #app {
      font-family: 'Roboto', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: $gray;
      background-color: $black;
      margin: 2rem;
    }
  }

  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    // General Styling
    #app {
      font-family: 'Roboto', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: $gray;
      background-color: $black;
      padding: 2rem;
    }
  }

  // responsive sizing for "screen and (min-width: 920px)"
  @include media-query('lg') {

  }
  // responsive sizing for "screen and (min-width: 1024px)"
  @include media-query('desk') {

  }
</style>
