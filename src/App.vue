<template>
  <div id="app">
    <notifications group="media" position="bottom right" />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <router-link class-active="active" class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class-active="active" class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class-active="active" class="nav-link" to="/works">Works Youtube</router-link>
          </li>
          <li class="nav-item">
            <router-link class-active="active" class="nav-link" to="/audios">Works audio</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Language
            </a>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from './components/LanguageSwitcher.vue'

export default {
  components: {
    LanguageSwitcher,
  },
}
</script>
<style>
body {
  background: url('assets/ksu-back.jpg') no-repeat center center fixed;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
