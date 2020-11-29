<template>
    <div class="d-flex flex-column position-relative">
        <div class="contact-text d-flex flex-column text-center p-5">
            <a href="mailto:kseniya.kawko@tonmeister.de" class="mt-auto">kseniya.kawko@tonmeister.de</a>
            <a href="tel:+4917632161791" class="mb-auto">+49 17632161791 </a>
        </div>
        <div class="contact-ksu-picture">
            <plane v-show="imageLoading"></plane>
            <img class="image-hidden" src="../assets/ksu-back.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import Plane from 'vue-loading-spinner/src/components/Plane'

    export default {
        name: "Contact",
        components: {
            Plane
        },
        data() {
            return {
                imageLoading: true,
                percentage: 0,
                breakPoint: 768
            }
        },
        mounted() {
            this.percentage = ((5848 - 3898) / 5848) * 100
            const ksuPickContainer = this.$el.querySelector('.contact-ksu-picture')
            const windowWidth = window.innerWidth
            if (windowWidth <= this.breakPoint) {
                const calculatedHeight = Math.floor(windowWidth - (windowWidth * (this.percentage / 100)))
                ksuPickContainer.style.height = calculatedHeight + 'px'
                const ksuContactText = this.$el.querySelector('.contact-text')
                const ksuContactTextHeight = 151 + calculatedHeight
                ksuContactText.style.height = `calc(100vh - ${ksuContactTextHeight}px)`
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
    .contact-text {
        background-color: rgba(99, 50, 62, 1);
        width: 50%;
        height: calc(100vh - 151px);
        z-index: 1;
        margin-left: auto;
    }
    .contact-text a {
        color: white;
        font-size: 1.3em;
    }
    .contact-ksu-picture {
        width: 50%;
        height: 100%;
        /* background-image: url("../assets/ksu-back.jpg"); */
        background-size: cover;
        position: absolute;
        background-position: 47%;
        display: flex;
        justify-content: center;
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
    @media screen and (max-width: 992px){
        .contact-ksu-picture {
            background-position: 35%;
        }
    }
    @media screen and (max-width: 768px) {
        .contact-text {
            width: 100%;
            margin-left: 0;
        }
        .contact-ksu-picture {
            /* height: calc(100vh - 151px); */
            background-position: top;
            background-repeat: no-repeat;
            background-size: contain;
            width: 100%;
            position: unset;
        }
    }
    @media screen and (max-width: 528px) {
        .contact-text a {
            font-size: 1em;
        }
    }

</style>
