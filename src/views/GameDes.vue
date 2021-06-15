<!-- Game Design page
TO DO (after cert):
  1. Copy over the layout from the Wix page
  2. Add the subpages
    a. Digital Games
      i. ...
    b. Analog Games
      i. ...
-->

<template>
  <main class="Main games">
    <h2 class="Main__title">Game Design</h2>
    <p class="Main__pgdesc">I had a "eureka!" moment with Game Design while I was looking at a dual major in Fine Arts and Technology. It joins the creative outlets of writing, programming, art, and music which is exactly what I was looking for. I graduated in 2017 from DigiPen Institute of Technology with a Bachelor of Arts in Game Design.</p>
    <p class="Main__pgdesc">I enjoy trying new ideas while crafting unique games and refining my skills as a game designer. I love exploring different game spaces and genres to understand how they captivate their audiences. My favorite part of game design is watching something I made with my own hands come to life.</p>
    <p class="Main__pgdesc">My goal is to create games that explore new worlds and spark the imagination of the players. </p>
    <a class="Main__button" href="https://kyrueng.wixsite.com/website" target="_blank"><button type="button">Portfolio</button></a>
  </main>
</template>

<script type="text/javascript">
  export default {
    name: 'Game Design'
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
        padding: 1rem 2rem;
        color: $lightblue;
      }
      &__pgdesc {
        padding: 0 2rem;
      }
      &__button button {
        color: $darkergray;
        background-image: linear-gradient($darkgray, $black);
        border: 2px solid $black;
        border-radius: 5px;
        padding: 0.5rem;
        text-shadow: 0 0 5px $blue;
        margin-left: 2rem;
      }
      &__button:hover button:hover {
        border: 2px solid $blue;
        background-image: linear-gradient($blue, $black);
        color: $darkergray;
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
      &__button button {
        color: $darkergray;
        background-image: linear-gradient($darkgray, $black);
        border: 2px solid $black;
        border-radius: 5px;
        padding: 0.5rem;
        text-shadow: 0 0 5px $blue;
        margin-left: 2rem;
      }
      &__button:hover button:hover {
        border: 2px solid $blue;
        background-image: linear-gradient($blue, $black);
        color: $darkergray;
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
