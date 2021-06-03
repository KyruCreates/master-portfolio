<template>
  <div class="home Main">
    <h1 class="Main__title">Welcome!</h1>
    <p class="Main__p1">Feel free to look around!</p>
    <p class="Main__p2">There's much to explore - from <a><router-link to="/photo">Photography</router-link></a> to <a><router-link to="/games">Game Design</router-link></a> to <a><router-link to="/music">Music</router-link></a> and <a><router-link to="/art">Art</router-link></a>!</p>
    <p class="Main__p3">Kick back and relax, and if you'd like to know more about me, head on over to <a><router-link to="/about">About</router-link></a>.</p>
  </div>
</template>

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
      }
    }
  }
  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    .Main {
      display: block;
      &__title {
        font-family: 'Courgette', cursive;
        padding-bottom: 1rem;
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
