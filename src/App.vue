<template>
  <h1 class="page-header__title">Kendall Eng</h1>
  <h2 class="page-header__subtitle">Creative</h2>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/photo">Photography</router-link> |
    <router-link to="/games">Game Design</router-link> |
    <router-link to="/art">Art</router-link> |
    <router-link to="/music">Music</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
