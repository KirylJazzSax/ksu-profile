<template>
    <div class="audio-container">
        <div class="audio-description">
            <div class="lead mb-3 display-tablet">{{ audio.title }}</div>
            <div class="mb-3 image"><img :src="audio.image" class="img-fluid" alt="album-image"></div>
            <div class="display-tablet">{{ audio.description }}</div>
        </div>
        <div class="audio">
            <div class="lead mb-3 display-deckstop">{{ audio.title }}</div>
            <div class="display-deckstop">{{ audio.description }}</div>
            <audio :src="audio.audio" controls></audio>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Audio',
    props: {
        audio: Object,
    },
}
</script>
<style>
    .audio-container {
        display: flex;
        flex-wrap: wrap;
        row-gap: 10px;
        justify-items: center;
        width: 100%;
    }
    .audio {
        display: grid;
        width: 50%;
        align-content: center;
        justify-content: center;
    }
    .audio-description {
        display: grid;
        width: 50%;
    }
    .image img {
        max-width: 70%;
    }
    audio {
        outline: none;
    }
    @media screen and (max-width: 768px) {
        .audio-description {
            width: 100%;
        }
        .audio {
            width: 100%;
        }
    }
</style>