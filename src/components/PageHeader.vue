<!-- Page Header format -->
<template>
  <header class="Main__header">
    <h1 class="Main__header__title">Kendall Eng</h1>
    <h2 class="Main__header__subtitle">Creative</h2>
    <!-- Navbar -->
    <nav class="Main__header__menu navbar navbar-expand-lg navbar-dark" id="nav">
      <div class="container-fluid">
        <a class="navbar-brand"></a>
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <!-- Collapsable wrapper -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active"><router-link to="/">Home</router-link></a>
            <a class="nav-link"><router-link to="/photo">Photography</router-link></a>
            <a class="nav-link"><router-link to="/games">Game Design</router-link></a>
            <a class="nav-link"><router-link to="/art">Art</router-link></a>
            <a class="nav-link"><router-link to="/music">Music</router-link></a>
            <a class="nav-link"><router-link to="/about">About</router-link></a>
          </div>
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
    .container-fluid button i {
      padding: 5px;
      border-radius: 2px;
      background-color: $blue;
    }
    .container-fluid button i:hover {
      background-color: $purple;
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
    .container-fluid button i {
      padding: 5px;
      border-radius: 2px;
      background-color: $blue;
    }
    .container-fluid button i:hover {
      background-color: $purple;
    }
  }
  // responsive sizing for "screen and (min-width: 920px)"
  @include media-query('lg') {

  }
  // responsive sizing for "screen and (min-width: 1024px)"
  @include media-query('desk') {

  }
</style>
