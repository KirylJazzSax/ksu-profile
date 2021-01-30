<template>
    <div id="app" data-app>
<!--      <nprogress-container></nprogress-container>-->
      <v-app-bar
          color="#90CAF9"
          dark
          prominent
          fade-img-on-scroll
          shrink-on-scroll
          scroll-target="#scrolling"
          :src="require('@/assets/immersive-pick.jpg')"
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none d-xl-none d-lg-none" />

        <v-row>
          <v-col cols="12">
            <LanguageSwitcher
                class="d-flex justify-content-start justify-content-md-end justify-content-lg-end justify-content-xl-end align-items-center"
            />
          </v-col>
          <v-col cols="12">
            <v-app-bar-title class="d-none d-md-flex justify-content-center">
              <div>Kseniya Kawko</div>
              <div>Tonmeister / Recording Producer / 3D Audio Engineer</div>
            </v-app-bar-title>
          </v-col>
        </v-row>
        <v-row class="d-md-none d-lg-none d-xl-none">
          <v-col cols="12">
            <div class="ksu-header d-flex flex-column justify-center">
              <div>Kseniya Kawko</div>
              <div>Tonmeister / Recording Producer / 3D Audio Engineer</div>
            </div>
          </v-col>
        </v-row>
        <template v-slot:extension>
          <v-tabs class="d-none d-md-flex justify-content-center">
            <v-tab to="/">About</v-tab>
            <v-tab to="/works">Portfolio</v-tab>
            <v-tab to="/immersive">Immersive</v-tab>
            <v-tab to="/awards">Awards</v-tab>
            <v-tab to="/contact">Contact</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
      >
        <v-list
            nav
            dense
        >
          <v-list-item-group
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/" style="text-decoration: none">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>

            <v-list-item to="/works" style="text-decoration: none">
              <v-list-item-icon>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item>
            <v-list-item to="/immersive" style="text-decoration: none">
              <v-list-item-icon>
                <v-icon>mdi-surround-sound-3-1</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Immersive</v-list-item-title>
            </v-list-item>
            <v-list-item to="/awards" style="text-decoration: none">
              <v-list-item-icon>
                <v-icon>mdi-seal</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Awards</v-list-item-title>
            </v-list-item>
            <v-list-item to="/contact" style="text-decoration: none">
              <v-list-item-icon>
                <v-icon>mdi-phone-ring</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list-item-group>

        </v-list>
      </v-navigation-drawer>
      <v-sheet id="scrolling">
        <v-container fluid>
          <router-view class="router-view" />
        </v-container>
      </v-sheet>
    </div>
</template>

<script>
    import LanguageSwitcher from './components/LanguageSwitcher.vue'

    export default {
        components: {
            LanguageSwitcher,
        },
      data() {
          return {
            drawer: false
          }
      }
    }
</script>


<style>
    @font-face {
        font-family: raleway-med;
        src: url('assets/raleway/Raleway-Medium.ttf');
    }

    @font-face {
        font-family: raleway-semi-bold;
        src: url('assets/raleway/Raleway-SemiBold.ttf');
    }

    #app {
        font-family: raleway-med;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .navbar-container nav {
        max-width: 1400px;
        margin: auto;
    }
    .container-fluid {
        max-width: 1400px;
        margin: auto;
        max-height: 1050px;
    }
    .ksu-header {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 768px) {
      .v-toolbar__content {
        flex-wrap: wrap;
      }
    }
</style>
