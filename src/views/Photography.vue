<!-- Photography page
TO DO:
  2. Assuming the data is a list:
    c. That component should accept at least four props and use props validation (required and data type)
      i. CURRENT PROBLEM: Only displaying the one image's info (not correct photo - looks like pulling info from the last photo)
  3. Style photos
    b. Flexbox / Grid to show more than 1 image on bigger screen sizes (gallery view)
    c. Center the figcaptions & quote text
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
      <ul class="Main__gallery__list list-unstyled">
        <!-- Making a list of images using v-for -->
        <li class="Main__gallery__list__item" v-for="(photo) in list">
          <figure class="Main__gallery__list__item__figure">
            <img class="Main__gallery__list__item__figure__image" v-bind:src="photo" />
            <figcaption class="Main__gallery__list__item__figure__caption">
              <!-- <h4>{{ title }}</h4> -->
              <!-- <p>{{ desc }}</p> -->
              <!-- <p>Taken on: {{ date }}</p> -->
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </main>
</template>

<script type="text/javascript">
  export default {
    name: 'Photo',
    data() {
      return {
        // List of photos
        list: [],
        // title: String,
        // desc: String,
        // date: Date
      }
    },
    mounted() {
      // Grab the Flickr API
      fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=17bcaf01e8e45c2d434ccf275e755158&user_id=190433911%40N03&extras=description%2C+date_taken&per_page=20&page=1&format=json&nojsoncallback=1')
      // Parse the response so javascript can read it
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // For each photo element in json, push the built img src url
        json.photos.photo.forEach((el, index) => {
          // this.list.push(`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_z.jpg`, `${el.title}`);
          this.list.push(`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`);
// Dynamically display the Title, Description, and Date Taken for each photo
          // this.list.push(`${el.title}`);
          // this.list.push(`${el.description._content}`);
          // this.list.push(`${el.datetaken}`);
// CURRENT PROBLEM: this is only displaying the first image's info
          // this.title = `${el.title}`;
          // this.desc = `${el.description._content}`;
          // this.date = `${el.datetaken}`;
        })
      })
      // If there's a problem, log it in the console with the message and the error
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
      }
      &__desc {
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
      }
      &__desc {
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
