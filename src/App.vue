<template>
    <div id="app">
        <nprogress-container></nprogress-container>
        <div class="logo p-3" ref="logo">
            <div class="name">Kseniya Kawko</div>
            <div class="description">Tonmeister / Recording Producer / 3D Audio Engineer</div>
        </div>
        <notifications group="media" position="bottom right"/>
        <div class="navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light px-5">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav w-100 justify-content-around">
                        <li class="nav-item">
                            <router-link class-active="active" class="nav-link" to="/">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class-active="active" class="nav-link" to="/works">Portfolio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class-active="active" class="nav-link" to="/immersive">Immersive</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class-active="active" class="nav-link" to="/awards">Awards</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class-active="active" class="nav-link" to="/contact">Contact</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Language
                            </a>
                            <LanguageSwitcher/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="container-fluid">
            <router-view class="router-view" />
        </div>
    </div>
</template>

<script>
    import LanguageSwitcher from './components/LanguageSwitcher.vue'
    import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

    export default {
        components: {
            LanguageSwitcher,
            NprogressContainer
        },
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
    .logo {
        font-family: raleway-semi-bold;
        border-bottom: 1px solid rgba(0, 0, 0, 0.7);
        color: #fff;
        /*background: linear-gradient(0deg, rgba(142,188,208,1) 100%, rgba(183,228,247,1) 100%);*/
      /*background: #0090b7;*/
      background: #0093ae;
    }
    .name {
        font-size: 1.5em;
    }
    .description {
        font-size: 1.1em;
    }
    .navbar-container {
        width: 100%;
        background-color: #EFEBE9;
    }
    .navbar-container nav {
        max-width: 1400px;
        margin: auto;
    }
    .container-fluid {
        /*background-color: #f8f9fa;*/
      /*background-color: #58c0e9;*/
      background-color: #EFEBE9;
    }
    .container-fluid .router-view {
        max-width: 1400px;
        margin: auto;
        max-height: 1050px;
    }
</style>
