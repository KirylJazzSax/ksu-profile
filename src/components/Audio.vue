<template>
    <div class="audio">
        <div class="lead mb-3">{{ audio.title }}</div>
        <div class="mb-3 image"><img :src="audio.image" class="img-fluid" alt="album-image"></div>
        <div>{{ audio.description }}</div>
        <audio :src="audio.audio" controls></audio>
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
    .audio {
        display: grid;
        row-gap: 10px;
        justify-items: center;
    }
    .image img {
        max-width: 70%;
    }
</style>