<template>
    <div class="w-25">
        <div v-for="(audio, key) in audios" :key="key">
            <aplayer :music="audio" />
            <!-- <div class="btn btn-danger" :data-audio-id="key" @click="remove">Delete</div> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import aplayer from 'vue-aplayer'

export default {
    name: 'Audios',
    components: {
        aplayer
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
                this.audios = response.data
                // Object.keys(response.data).forEach(key => {
                //     this.audios.push({
                //         title: response.data[key].title,
                //         src: 'uploads/' + response.data[key].audioNameGenerated,
                //         artist: response.data[key].artist ?? ' '
                //     })
                // })                
            } catch(err) {
                console.log(err)
            }
        },
        audioPath: function(name) {
            return 'uploads/' + name
        },
        async remove(e) {
            console.log(e)
            // let response = await axios.delete(`/api/audios/${e.target.dataset['audio-id']}/delete`)
            // console.log(response)
            this.loadAudios()
        }
    },
}
</script>