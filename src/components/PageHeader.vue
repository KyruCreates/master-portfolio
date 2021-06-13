<!-- Page Header format -->
<template>
  <header class="Main__header">
    <h1 class="Main__header__title">Kendall Eng</h1>
    <h2 class="Main__header__subtitle">Creative</h2>
    <!-- Navbar -->
    <nav class="Main__header__menu navbar navbar-expand-lg navbar-dark" id="nav">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navToggle">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/photo">Photography</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/games">Game Design</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/art">Art</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/music">Music</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><router-link to="/about">About</router-link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
  // Import partials
  @import '../styles/_settings.responsive';
  @import '../styles/_settings.variables';

  // responsive sizing for "screen and (max-width: 767px)"
  @include media-query('mobile') {
    // Header Styling
    .Main__header {
      text-align: center;
      padding-top: 1rem;
      &__title {
        font-family: 'Caveat', cursive;
        color: $darkred;
        font-size: 3rem;
        margin: 0;
        padding: 0;
      }
      &__subtitle {
        font-family: 'Courgette', cursive;
        color: $robins;
        font-size: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    // Menu styling
    #nav {
      padding: 1rem;
      a {
        font-weight: bold;
        color: $purple;
        padding: 1rem;
        text-decoration: none;

        &.router-link-exact-active {
          color: $gray;
          background-color: $blue;
          border-radius: 5px;
        }
      }
      a:hover {
        color: $lightblue;
      }
    }
  }
  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    // Header Styling
    .Main__header {
      text-align: center;
      padding-top: 1rem;
      &__title {
        font-family: 'Caveat', cursive;
        color: $darkred;
        font-size: 3rem;
        margin: 0;
        padding: 0;
      }
      &__subtitle {
        font-family: 'Courgette', cursive;
        color: $robins;
        font-size: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
    // Menu styling
    #nav {
      padding: 1rem;
      a {
        font-weight: bold;
        color: $purple;
        padding: 1rem;
        text-decoration: none;

        &.router-link-exact-active {
          color: $gray;
          background-color: $blue;
          border-radius: 5px;
        }
      }
      a:hover {
        color: $lightblue;
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
