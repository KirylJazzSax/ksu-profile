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
        data () {
            return {
                audios: [
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/happy_little_accident.jpg',
                        imageHeight: 320,
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                ],
            }
        },
    }
</script>
<style>
    .audios {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width: 600px) {
        .audios {
            justify-content: center;
        }
    }
</style>
