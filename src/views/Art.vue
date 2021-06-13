<template>
  <!-- Rough layout for Art page -->
  <main class="Main" id="app">
    <!-- Main page content -->
    <article class="Main__content content">
      <h2 class="Main__content__title">Art</h2>
      <p class="Main__content__pgdesc">In my spare time, I draw. I've mostly moved to digital art, though every now and then I go back to traditional paper and pencil or paper and paint. I enjoy seeing the different textures and trying new techniques.</p>
      <div class="Main__content__imgs">
        <!-- v-for loop that loops through the array imageSrc to pull image sources -->
        <img class="Main__content__imgs__examples" v-for="index in imageSrc" v-bind:src="index" alt="placeholder images" />
      </div>
    </article>
    <!-- Sidebar - commission info and status -->
    <aside class="Main__sidebar sidebar">
      <h3 class="Main__sidebar__title">Commissions</h3>
      <!-- If {{open}} is false, commission status is closed -->
      <p class="Main__sidebar__status" v-if="open === false">Status: Closed</p>
      <!-- Else commision status is open -->
      <p class="Main__sidebar__status" v-else>Status: Open</p>
      <!-- Commission info -->
      <ul class="Main__sidebar__info" v-if="priceShowing === true">
        <li class="Main__sidebar__info__price">${{emote}} USD per emote/badge</li>
        <li class="Main__sidebar__info__price">${{avatar}} USD per avatar/icon</li>
        <li class="Main__sidebar__info__price">${{panelmin}} - ${{panelmax}} USD per panel (depending on how detailed)</li>
        <li class="Main__sidebar__info__price">${{half}} USD per half-body</li>
        <li class="Main__sidebar__info__price">${{full}} USD per full body</li>
        <li class="Main__sidebar__info__price">+${{bgaddon}} USD per specific background</li>
        <li class="Main__sidebar__info__price">+${{charaddonmin}} - ${{charaddonmax}} USD per additional character (up to 3 characters per piece, price depends on how detailed)</li>
      </ul>
      <!-- Button to toggle the commission prices -->
      <button class="Main__sidebar__button" type="button" name="button" v-on:click="priceToggle" v-if="priceShowing === true">Hide Prices</button>
      <button class="Main__sidebar__button" type="button" name="button" v-on:click="priceToggle" v-else>Show Prices</button>
    </aside>
  </main>
</template>

<script type="text/javascript">
  // Commission info data
  const CommInfo = {
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
        imageSrc: ['https://picsum.photos/250', 'https://picsum.photos/250?grayscale', 'https://picsum.photos/250', 'https://picsum.photos/250?grayscale', 'https://picsum.photos/250', 'https://picsum.photos/250?grayscale']
      }
    },
    methods: {
      // Toggles whether the commission price list is showing
      priceToggle() {
        if(this.priceShowing === false) {
          this.priceShowing = true;
        } else {
          this.priceShowing = false;
        }
      }
    }
  }
  // Vue.createApp(CommInfo).mount('#app');
</script>
