<!--
TO DO:
  1. Add Flickr API to populate the page
    1a. Handle errors for API request
  2. Assuming the data is a list:
    2a. Use a v-for loop to display the list elements on the page
    2b. Build a new component that will be used for each list element
    2c. That component should accept at least four props and use props validation (required and data type)
  3. If the data isn't a list:
    3a. At least 4 pieces of data from the API must be displayed
    3b. There must be conditional content displayed based on value of some returned data

  BONUS: Create UI interactions to modify/interact with your API data
-->
<template>
  <main class="photo Main">
    <!-- Page header -->
    <h2 class="Main__title">Photography</h2>
    <!-- General description of what I do as it relates to photography -->
    <p class="Main__desc">The first cameras I used were the disposable Kodak cameras, followed by the Nikon Coolpix S200, that my parents gave me when I was a growing up. I would take them with me on vacations and to summer camps and would quickly fill them.</p>
    <p class="Main__desc">I always preferred being behind the camera, rather than in front of them. Photography pulls me in by capturing moments that bring back memories to share or experimenting with something new that catches my eye. I enjoy taking pictures of nature and wildlife, food and drinks, travel, pets, night photography, and all around experimenting. There’s also the occasional selfie.</p>
    <p class="Main__desc">Lately, I’ve been using my phone’s camera and borrowing my parents’ Nikon D60 or D7100 whenever I get the chance. Most of my shots are from going on walks and shooting what catches my eye. This often leads to a lot of wandering.</p>
    <!-- Making a quote block -->
    <figure class="Main__quote">
      <blockquote class="Main__quote__block blockquote">
        <p class="Main__quote__text">Not all who wander are lost.</p>
      </blockquote>
      <figcaption class="Main__quote__caption blockquote-footer">
        J.R.R. Tolkein
      </figcaption>
    </figure>
    <!-- Adding Flickr API to display recent posts -->
    <div class="Main__gallery">
      {{ list }}
    </div>
  </main>
</template>

<script type="text/javascript">
  // placehodler json
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => {return response.json()})
  // .then(json => {console.log(json)})
  // .catch(() => {console.log('Something went wrong!')});

  export default {
    name: 'Photo',
    data() {
      return {
        list: []
      }
    },
    mounted() {
        fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=17bcaf01e8e45c2d434ccf275e755158&user_id=190433911%40N03&extras=description&format=json&nojsoncallback=1')
        // Parse the response so javascript can read it
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          this.list = json;

          // json.forEach(function (el, index) {
          //   if(index < 100) {
          //     console.log(el.id);
          //   }
          // })
        })
        .catch((err) => {
          console.log('Something went wrong! ', err);
        })
      }
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
        text-align: left;
      }
      &__desc {
        text-align: left;
        padding: 0 2rem;
      }
      &__quote {
        border: solid 2px $darkgray;
        border-radius: 5px;
        padding-top: 1rem;
        margin: 1rem 2rem;
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
        text-align: left;
      }
      &__desc {
        text-align: left;
        padding-left: 2rem;
      }
      &__quote {
        border: solid 2px $darkgray;
        border-radius: 5px;
        padding-top: 1rem;
        margin: 1rem 20%;
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
