<template>
    <div class="w-25" ref="audios"></div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Audios',
    data () {
        return {
            audios: null,
            awsUrl: 'https://ksu-profile.s3.eu-central-1.amazonaws.com/'
        }
    },
    mounted() {
        this.loadAudios()
    },
    methods: {
        loadAudios: async function () {
            try {
                let response = await axios.get('/api/audios')
                this.audios = response.data.filter(element => !element.Key.match(/\/$/))
                this.audios.forEach(audio => {
                    let audioElement = new Audio(this.awsUrl + audio.Key)
                    audioElement.controls = true
                    this.$refs['audios'].appendChild(audioElement)
                })
            } catch(err) {
                console.log(err)
            }
        }
    },
}
</script>
