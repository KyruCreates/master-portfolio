<!-- Home page
  TO DO: (after cert)
    1. Add in page links
      i. Music <a class="Main__link link-info"><router-link to="/music">Music</router-link></a>
      ii. Front-End Web Design <a class="Main__link link-info"><router-link to="/web">Front-End Web Design</router-link></a>
-->
<template>
  <main class="home Main">
    <h2 class="Main__title">Welcome!</h2>
    <p class="Main__pgdesc">This is my portfolio of portfolios where each topic has its own home. I wanted to create a place that, at the very least, holds a path to each existing site. Feel free to look around!</p>
    <p class="Main__pgdesc">There's much to explore - from <a class="Main__link link-info"><router-link to="/photo">Photography</router-link></a> to <a class="Main__link link-info"><router-link to="/games">Game Design</router-link></a> and <a class="Main__link link-info"><router-link to="/art">Art</router-link></a>!</p>
    <p class="Main__pgdesc">Kick back and relax, and if you'd like to contact me, head on over to <a class="Main__link link-info"><router-link to="/contact">Contact</router-link></a>.</p>
  </main>
</template>

<script type="text/javascript">
  export default {
    name: 'Home'
  }
</script>

<style lang="scss">
  // Import partials
  @import '../styles/_settings.responsive';
  @import '../styles/_settings.variables';

  // responsive sizing for "screen and (max-width: 767px)"
  @include media-query('mobile') {
    .Main {
      &__title {
        font-family: 'Courgette', cursive;
        padding-bottom: 1rem;
        color: $lightblue;
      }
    }
  }
  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    .Main {
      &__title {
        font-family: 'Courgette', cursive;
        padding-bottom: 1rem;
        color: $lightblue;
      }
    }
  }
  // responsive sizing for "screen and (min-width: 920px)"
  @include media-query('lg') {

  }
  // responsive sizing for "screen and (min-width: 1024px)"
  @include media-query('desk') {

  }
</style>
