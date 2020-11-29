<template>
    <div class="about d-flex flex-column text-dark position-relative">
        <div class="ksu-picture">
            <plane v-show="imageLoading"></plane>
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
import Plane from 'vue-loading-spinner/src/components/Plane'

export default {
    components: {
        vueCustomScrollbar,
        Plane
    },
 
    data() {
        return {
            settings: {
                suppressScrollY: false,
                suppressScrollX: false,
                wheelPropagation: false
            },
            imageLoading: true,
            percentage: 0,
            breakPoint: 992
        }
    },
    mounted() {
        this.percentage = ((5848 - 3898) / 5848) * 100
        const ksuPickContainer = this.$el.querySelector('.ksu-picture')
        const windowWidth = window.innerWidth
        if (windowWidth <= this.breakPoint) {
                const calculatedHeight = Math.floor(windowWidth - (windowWidth * (this.percentage / 100)))
            ksuPickContainer.style.height = calculatedHeight + 'px'
        }
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
    .spinner.spinner--plane {
        margin: auto;
    }
    #top .plane {
        background: rgba(99, 50, 62, 1);
    }
    #middle .plane {
        background: rgb(49, 25, 31) !important;
    }
    #bottom .plane {
        background: rgba(99, 50, 62, 1);
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
            background-image: url("../assets/ksu-back.jpg");
            background-size: contain;
            background-position: top;
            position: unset;
        }
    }
    @media screen and (max-width: 768px) {
        .ksu-picture {
            background-size: contain;
            background-position: top;
        }
        .about-text {
            height: 600px;
        }
    }
    /* @media screen and (max-width: 528px) {
        .ksu-picture {
            height: 266px;
        }
    }
    @media screen and (max-width: 400px) {
        .ksu-picture {
            height: 212px;
        }
    } */
</style>
