<template>
    <div class="about d-flex flex-column text-dark position-relative">
        <div class="ksu-picture">
            <circle10 v-show="imageLoading"></circle10>
            <img class="image-hidden" src="../assets/ksu-back.jpg" alt="">
        </div>
        <vue-custom-scrollbar class="about-text p-5" :settings="settings">
            {{ $t('about') }}
        </vue-custom-scrollbar>
    </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
import Circle10 from 'vue-loading-spinner/src/components/Circle10'

export default {
    components: {
        vueCustomScrollbar,
        Circle10
    },
    data() {
        return {
            settings: {
                suppressScrollY: false,
                suppressScrollX: false,
                wheelPropagation: false
            },
            imageLoading: true
        }
    },
    mounted() {
        const ksuPickContainer = this.$el.querySelector('.ksu-picture')
        const ksuPick = this.$el.querySelector('.image-hidden')
        ksuPick.onload = () => {
            ksuPickContainer.style.backgroundImage = `url('${ksuPick.src}')`
            this.imageLoading = false
        }   
    }
}
</script>  
<style>
    .about-text {
        background-color: rgba(99, 50, 62, 1);
        text-align: justify;
        width: 50%;
        height: calc(100vh - 151px);
        z-index: 1;
        margin-left: auto;
        color: white;
    }
    .ksu-picture {
        width: 50%;
        height: 100%;
        /* background-image: url("../assets/ksu-back.jpg"); */
        background-size: cover;
        background-position: 47%;
        position: absolute;
        display: flex;
    }
    .image-hidden {
        display: none;
    }
    .spinner.spinner--circle-10 {
        margin: auto;
    }
    @media screen and (min-height: 800px) {
        .about-text {
            font-size: 17px;
        }
    }
    @media screen and (min-height: 900px) {
        .about-text {
            font-size: 18px;
        }
    }
    @media screen and (min-height: 950px) {
        .about-text {
            font-size: 19px;
        }
    }
    @media screen and (min-height: 1050px) {
        .about-text {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 992px) {
        .about-text {
            width: 100%;
            margin-left: 0;
        }
        .ksu-picture {
            width: 100%;
            height: 500px;
            background-image: url("../assets/ksu-back.jpg");
            background-size: contain;
            background-position: top;
            position: unset;
        }
    }
    @media screen and (max-width: 768px) {
        .ksu-picture {
            height: 349px;
            background-size: contain;
            background-position: top;
        }
        .about-text {
            height: auto;
        }
    }
    @media screen and (max-width: 528px) {
        .ksu-picture {
            height: 266px;
        }
    }
    @media screen and (max-width: 400px) {
        .ksu-picture {
            height: 212px;
        }
    }
</style>
