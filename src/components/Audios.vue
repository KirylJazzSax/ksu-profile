<template>
    <div ref="audios" class="d-flex flex-column p-3">
        <Audio :key="index" v-for="(audio, index) in audios" :audio="audio" />
    </div>
</template>
<script>
    import axios from 'axios'
    import Audio from './Audio'

    export default {
        name: 'Audios',
        components: {
            Audio
        },
        data () {
            return {
                audios: null,
            }
        },
        mounted() {
            this.loadAudios()
        },
        methods: {
            loadAudios: async function () {
                try {
                    let response = await axios.get('/api/audios')
                    this.audios = response.data.audios
                    // console.log(this.audios)    
                    // this.audios.forEach(audio => {
                    //     let newAudio = document.createE
                    //     let audioElement = new Audio(this.awsUrl + audio.Key)
                    //     audioElement.controls = true
                    //     this.$refs['audios'].appendChild(audioElement)
                    // })
                } catch(err) {
                    console.log(err)
                }
            }
        },
    }
</script>
