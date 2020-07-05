<template>
    <div class="about text-light p-5">
        <div class="about-text p-5">{{ $t('about') }}</div>
    </div>
</template>
<style>
    .about-text {
        background-color: rgba(99, 50, 62, 0.3);
        text-align: justify;
        width: 50%;
    }
    @media screen and (max-width: 992px) {
        .about-text {
            width: 100%;
        }
    }
</style>
