<template>
    <div class="about d-flex text-light position-relative">
        <div class="ksu-picture position-absolute"></div>
        <div class="about-text p-5 ml-auto">{{ $t('about') }}</div>
    </div>
</template>
<style>
    .about-text {
        background-color: rgba(99, 50, 62, 1);
        text-align: justify;
        width: 50%;
        z-index: 1;
    }
    .ksu-picture {
        width: 50%;
        height: 100%;
        background-image: url("../assets/ksu-back.jpg");
        background-size: cover;
        background-position: -200px;
    }
    @media screen and (max-width: 992px) {
        .about-text {
            width: 100%;
            background-color: rgba(99, 50, 62, 0.3);
        }
        .ksu-picture {
            width: 100%;
            height: 100%;
            background-image: url("../assets/ksu-back.jpg");
            background-size: contain;
            background-position: center;
        }
    }
    @media screen and (max-width: 576px) {
        .about-text {
            width: 100%;
            background-color: rgba(99, 50, 62, 0.3);
        }
        .ksu-picture {
            width: 100%;
            height: 100%;
            background-image: url("../assets/ksu-back-copy.jpg");
            background-size: contain;
            background-position: top;
            background-repeat: no-repeat;
            background-color: rgba(99, 50, 62, 0.7);
        }
    }
</style>
