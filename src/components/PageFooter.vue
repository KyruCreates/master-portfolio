<!-- Page footer -->
<template>
  <footer class="Main__footer">
    <p class="Main__footer__origin">Originally created for UW Certificate in Front-End Web Development.</p>
    <p class="Main__footer__update">Updated often.</p>
  </footer>
</template>

<style lang="scss">
  // Import partials
  @import '../styles/_settings.responsive';
  @import '../styles/_settings.variables';

  // responsive sizing for "screen and (max-width: 767px)"
  @include media-query('mobile') {
    .Main__footer {
      padding: 2rem 0;
      margin: 2rem;
      font-style: italic;
      color: $purple;
      text-align: center;
      p {
        margin-bottom: 0;
      }
    }
  }
  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    .Main__footer {
      padding: 2rem 0;
      margin: 2rem;
      font-style: italic;
      color: $purple;
      text-align: center;
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
