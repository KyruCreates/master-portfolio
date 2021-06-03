<template>
  <footer class="Main__footer">
    <p>Originally created for UW Certificate in Front-End Web Development.</p>
    <p>Updated often.</p>
  </footer>
</template>

<style lang="scss">
  // Import partials
  @import '../styles/_settings.responsive';
  @import '../styles/_settings.variables';

  // responsive sizing for "screen and (max-width: 767px)"
  @include media-query('mobile') {
    .Main__footer {
      padding-top: 2rem;
      padding-bottom: 1rem;
      font-style: italic;
      p {
        margin-bottom: 0;
      }
    }
  }
  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    .Main__footer {
      padding-top: 2rem;
      padding-bottom: 1rem;
      font-style: italic;
      p {
        margin-bottom: 0;
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
