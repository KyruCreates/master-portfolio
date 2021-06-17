<!-- Art page
TO DO:
  3. Fix bug where imageSrc[] local path is not loading imgs when it worked with URLs
-->

<template>
  <main class="art Main" id="app">
    <!-- Main page content -->
    <article class="Main__content content">
      <h2 class="Main__content__title">Art</h2>
      <p class="Main__content__pgdesc">I enjoy creating characters and learning new techniques and poses. My specialty lies in animals, but I am working on expanding that to human and human-like creatures. I predominantly draw in a digital medium using an iPad and Apple Pencil, though I originally started digital art with an Intuos 5 pen tablet. Every now and then, I go back to traditional paper and pencil or paint.</p>
      <div class="Main__content__imgs">
        <!-- v-for loop that loops through the array imageSrc to pull image sources -->
        <img class="Main__content__imgs__examples rounded" v-for="index in imageSrc" v-bind:src="index" alt="Examples of art I've done" />
      </div>
    </article>
    <!-- Sidebar - commission info and status -->
    <aside class="Main__sidebar sidebar">
      <h3 class="Main__sidebar__title">Commissions</h3>
      <!-- If {{ open }} is false, commission status is closed -->
      <p class="Main__sidebar__status" v-if="open === false">Status: Closed</p>
      <!-- Else commision status is open -->
      <p class="Main__sidebar__status" v-else>Status: Open</p>
      <!-- Button to toggle the commission prices -->
      <button class="Main__sidebar__button btn btn-primary mt-3" type="button" name="button" v-on:click="priceToggle" v-if="priceShowing === true">Hide Prices</button>
      <button class="Main__sidebar__button btn btn-primary mt-3" type="button" name="button" v-on:click="priceToggle" v-else>Show Prices</button>
      <!-- Commission info -->
      <ul class="Main__sidebar__info" v-if="priceShowing === true">
        <li class="Main__sidebar__info__price">${{ emote }} USD per emote/badge</li>
        <li class="Main__sidebar__info__price">${{ avatar }} USD per avatar/icon</li>
        <li class="Main__sidebar__info__price">${{ panelmin }} - ${{ panelmax }} USD per panel (depending on how detailed)</li>
        <li class="Main__sidebar__info__price">${{ half }} USD per half-body</li>
        <li class="Main__sidebar__info__price">${{ full }} USD per full body</li>
        <li class="Main__sidebar__info__price">+${{ bgaddon }} USD per specific background</li>
        <li class="Main__sidebar__info__price">+${{ charaddonmin}} - ${{ charaddonmax }} USD per additional character (up to 3 characters per piece, price depends on how detailed)</li>
      </ul>
    </aside>
  </main>
</template>

<script type="text/javascript">
  export default {
    name: 'Art',
    data() {
      return {
        // Commission status
        open: false,
        // Emote/Badge price
        emote: 20,
        // Avatar/Icon price
        avatar: 30,
        // Panel price
        panelmin: 20,
        panelmax: 40,
        // Half-body price
        half: 40,
        // Full body price
        full: 50,
        // Background Add-on price
        bgaddon: 5,
        // Character Add-on price
        charaddonmin: 10,
        charaddonmax: 20,
        // Prices showing
        priceShowing: true,
        // Array of images
        imageSrc: ['../assets/Emote-2v2.png', '../assets/Profile_Pic.png', '../assets/Mascot_Banner.png', '../assets/HedwigBun.PNG', '../assets/Melon Pup v2_20200708.jpg', '../assets/zeika__flat_color_by_kyruhikari.jpg'],
        // Array of image alt text
        // imageAlt: ['A waving light blue dragon emote', 'A light blue dragon on a scaled background profile picture', 'A flying light blue dragon on a scaled background banner', 'A sketch of a bunny named Hedwig curled into a ball', 'A drawing of a watermelon-themed cartoon dog', 'A drawing of a black fox character']
      }
    },
    methods: {
      // Toggles whether the commission price list is showing
      priceToggle() {
        this.priceShowing = !this.priceShowing;
      }
    }
  }
</script>

<style scoped lang="scss">
  // Import partials
  @import '../styles/_settings.responsive';
  @import '../styles/_settings.variables';
  @import '../styles/_base.normalize';
  // Import Roboto and Courgette fonts
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Courgette&family=Roboto&display=swap');

  // responsive sizing for "screen and (max-width: 767px)"
  @include media-query('mobile') {
    .Main {
      font-family: 'Roboto', sans-serif;
      background-color: $black;
      color: $gray;
      // Page styling
      &__content {
        margin: 0 1rem;
        padding: 1rem;
        &__title {
          font-family: 'Courgette', cursive;
          color: $lightblue;
        }
        &__pgdesc {
          text-align: left;
        }
        &__imgs {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          &__examples {
            margin-bottom: 1rem;
            padding: 0 1rem;
          }
        }
      }
      // Sidebar styling
      &__sidebar {
        margin: 0 1rem;
        padding: 1rem;
        border-top: 1px solid $blue;
        &__title {
          font-family: 'Courgette', cursive;
          text-align: center;
          color: $lightblue;
        }
        &__status {
          text-align: center;
          font-weight: bold;
        }
        &__button {
          text-shadow: 0 0 5px $blue;
          margin-left: 2rem;
        }
        &__info {
          margin-top: 2rem;
          padding: 0 2rem;
          list-style-type: circle;
          &__price {
            padding-bottom: 1rem;
          }
        }
      }
    }
  }
  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    .Main {
      font-family: 'Roboto', sans-serif;
      background-color: $black;
      color: $gray;
      display: flex;
      // Page styling
      &__content {
        margin-right: 1rem;
        display: inline-flex;
        flex-flow: column wrap;
        flex: 65%;
        &__title {
          font-family: 'Courgette', cursive;
          color: $lightblue;
        }
        &__pgdesc {
          text-align: left;
        }
        &__imgs {
          display: inline-flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          &__examples {
            margin-bottom: 1rem;
            margin-right: 1rem;
            padding: 0;
          }
        }
      }
      // Sidebar styling
      &__sidebar {
        margin: 0 1rem;
        padding: 0 1rem;
        border-left: 1px solid $blue;
        display: inline-flex;
        flex-flow: column wrap;
        flex: 35%;
        &__title {
          font-family: 'Courgette', cursive;
          text-align: center;
          color: $lightblue;
        }
        &__status {
          text-align: center;
          font-weight: bold;
        }
        &__button {
          text-shadow: 0 0 5px $blue;
          margin-left: 2rem;
        }
        &__info {
          margin-top: 2rem;
          padding: 0 2rem;
          list-style-type: circle;
          &__price {
            padding-bottom: 1rem;
          }
        }
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
