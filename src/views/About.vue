<template>
    <div class="about d-flex flex-column text-light position-relative">
        <div class="ksu-picture"></div>
        <div class="about-text p-5">{{ $t('about') }}</div>
    </div>
</template>
<style>
    .about-text {
        /*background-color: rgba(99, 50, 62, 1);*/
        text-align: justify;
        width: 50%;
        z-index: 1;
        margin-left: auto;
        background-color: #026670;
    }
    .ksu-picture {
        width: 50%;
        height: 100%;
        background-image: url("../assets/ksu-back.jpg");
        background-size: cover;
        background-position: 47%;
        position: absolute;
    }
    @media screen and (max-width: 992px) {
        .about-text {
            width: 100%;
            background-color: rgba(99, 50, 62, 1);
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
