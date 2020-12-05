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
                        image: 'img/bach_fest.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/console.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/cyngus_trio.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/get_event_image.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/accident.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/hannah.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/iceberg_uartet.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/mahler.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/matt.jpg',
                        imageHeight: 320,
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/odyssey.jpg',
                        imageHeight: 320,
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/quartet.jpg',
                        imageHeight: 320,
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/sunny_night.jpg',
                        imageHeight: 320,
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/yuki.jpg',
                        imageHeight: 320,
                        description: 'Amaizing description',
                        audio: 'audio/happy_little_accidant_andre.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/zocha.jpg',
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
