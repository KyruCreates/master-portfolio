<!-- Music page
TO DO:
  1. Add SoundCloud API (or make a simple music player with files).
  2. Styling the player.
-->

<template>
  <main class="Main music">
    <h2 class="Main__title">Music</h2>
    <p class="Main__pgdesc">Placeholder: This is the music page for all the music work I've done (main for student projects) posted on SoundCloud (using SoundCloud api).</p>
    <p class="Main__note">Somehow this will also show previews for the musescore projects (a sheet music writing program).</p>
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
