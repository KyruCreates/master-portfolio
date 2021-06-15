<!-- About page
TO DO:
  1. Add and test contact me form (simpler version of the bootstrap one)
  2. Fill out about me info (at very least copy from Wix site)
-->

<template>
  <main class="Main about">
    <h2 class="Main__title">About</h2>
    <p class="Main__pgdesc">Placeholder: This is where you will find information about me and how to contact me (via form).</p>
  </main>
</template>

<script type="text/javascript">

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
        padding: 1rem 2rem;
        color: $lightblue;
      }
      &__pgdesc {
        padding: 0 2rem;
      }
    }
  }
  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    .Main {
      &__title {
        font-family: 'Courgette', cursive;
        padding: 1rem 2rem;
        color: $lightblue;
      }
      &__pgdesc {
        padding-left: 2rem;
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
