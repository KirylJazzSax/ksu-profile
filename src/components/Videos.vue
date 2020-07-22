<template>
    <div class="d-flex flex-column p-3">
        <div class="video" v-for="(video, index) in videos" :key="index">
            <div class="lead mb-3">{{ video.title }}</div>
            <video :src="video.video" controls></video>
            <div>{{ video.description }}</div>
        </div>  
    </div>
</template>

<script>
    import YouTubeIframeLoader from 'youtube-iframe'
    import axios from 'axios'

    export default {
        data() {
            return {
                videos: null
            }
        },
        async mounted() {
            try {
                let response = await axios.get('/api/youtube')
                this.videos = response.data.videos
            } catch (err) {
                console.log(err)
            }
        },
        methods: {
            renderVideos: async function () {
                await this.loadVideos()

                Object.keys(this.videos).forEach(key => {
                    let videoId = this.videos[key].video
                    YouTubeIframeLoader.load(function (YT) {
                        new YT.Player(key, {
                            height: '300',
                            width: '320',
                            videoId: videoId,
                            playerVars: {'rel': 0}
                        })
                    })
                });
            },
            loadVideos: async function () {
                try {
                    let response = await axios.get('/api/youtube')
                    this.videos = response.data.videos
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>
<style>
    video {
        max-width: 70%;
    }
    .video {
        display: grid;
        justify-items: center;
        row-gap: 10px;
    }
</style>