<template>
    <div class="d-flex flex-column position-relative">
        <div class="contact-text d-flex flex-column text-center p-5">
            <a href="mailto:kseniya.kawko@tonmeister.de" class="mt-auto">kseniya.kawko@tonmeister.de</a>
            <a href="tel:+4917632161791" class="mb-auto">+49 17632161791 </a>
        </div>
        <div class="contact-ksu-picture"></div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        mounted() {
            this.$root.$children[0].$refs.logo.style.backgroundColor = '#026670'
        },
        destroyed() {
            this.$root.$children[0].$refs.logo.style.backgroundColor = 'rgba(99, 50, 62, 1)'
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
        /*background-color: #026670;*/
    }
    .contact-text a {
        color: #fff;
        font-size: 1.3em;
    }
    .contact-ksu-picture {
        width: 50%;
        height: 100%;
        background-image: url("../assets/ksu-back.jpg");
        background-size: cover;
        position: absolute;
        background-position: 47%;
    }
    @media screen and (max-width: 992px){
        .contact-ksu-picture {
            background-position: -47%;
        }
    }
    @media screen and (max-width: 768px) {
        .contact-text {
            background-color: rgba(99, 50, 62, 1);
            width: 100%;
            height: 150px;
            margin-left: 0;
        }
        .contact-ksu-picture {
            background-color: #a3a5b1;
            background-image: url("../assets/ksu-back-copy.jpg");
            height: 100vh;
            background-position: top;
            background-repeat: no-repeat;
            background-size: contain;
            width: 100%;
            position: unset;
        }
    }
    @media screen and (max-width: 528px) {
        .contact-ksu-picture {
            height: 328px;
        }
        .contact-text a {
            font-size: 1em;
        }
    }

</style>
