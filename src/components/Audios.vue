<template>
    <div ref="audios" class="d-flex flex-column p-3">
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
                        image: 'img/sunny.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/sunny_night.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/sunny.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/sunny_night.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/sunny.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/sunny_night.wav'
                    },
                    {
                        title: 'My audio',
                        image: 'img/sunny.jpg',
                        description: 'Amaizing description',
                        audio: 'audio/sunny_night.wav'
                    }
                ],
            }
        },
    }
</script>
