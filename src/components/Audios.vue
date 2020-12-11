<template>
    <div ref="audios" class="audios p-3">
        <Audio :key="index" v-for="(audio, index) in audios" :audio="audio" />
    </div>
</template>
<script>
    import Audio from './Audio'

    export default {
        name: 'Audios',
        components: {
            Audio
        },
      props: ['audios'],
    }
</script>
<style>
    .audios {
        display: grid;
        grid-template-columns: repeat(auto-fill, 280px);
        justify-content: space-between;
        /* flex-wrap: wrap;
        display: flex;
        justify-content: space-between; */
    }
    @media screen and (max-width: 871px) {
        .audios {
            justify-content: space-around;
        }
    }
    @media screen and (max-width: 600px) {
        .audios {
            flex-wrap: wrap;
            display: flex;
            justify-content: center;
        }
    }
</style>
