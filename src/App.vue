<template>
    <div id="app">
        <div class="logo p-3">
            <div class="name">Kseniya Kawko</div>
            <div class="description">Tonmeister / Recording Producer / 3D Audio Engineer</div>
        </div>
        <notifications group="media" position="bottom right"/>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav w-100 justify-content-around">
                    <li class="nav-item">
                        <router-link class-active="active" class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class-active="active" class="nav-link" to="/works">Works</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class-active="active" class="nav-link" to="/audios">Audios</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class-active="active" class="nav-link" to="/immersive">Immersive</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class-active="active" class="nav-link" to="/photos">Photos</router-link>
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
    @font-face {
        font-family: raleway-med;
        src: url('assets/raleway/Raleway-Medium.ttf');
    }

    @font-face {
        font-family: raleway-semi-bold;
        src: url('assets/raleway/Raleway-SemiBold.ttf');
    }

    body {
        background: url('assets/ksu-back.jpg');
        background-repeat: repeat-x;
        background-position: 100% 0%;
        background-attachment: fixed;
        background-size: contain;
    }

    #app {
        font-family: raleway-med;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .logo {
        background-color: #f8f9fa;
        font-family: raleway-semi-bold;
        border-bottom: 1px solid rgba(0, 0, 0, 0.7);
    }

    .name {
        font-size: 1.2em;
    }

    .description {
        font-size: 1.1em;
    }

</style>
