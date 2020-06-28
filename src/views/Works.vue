<template>
  <div>
    <div class="row">
      <div class="col-4">
        <div class="col-12 mb-3" :id="key" v-for="(video, key) in videos" :key="key"></div>
      </div>
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
  mounted() {
    this.renderVideos()
  },
  methods: {
    renderVideos: async function() {
      await this.loadVideos()

      Object.keys(this.videos).forEach(key => {
        let videoId = this.videos[key].video
          YouTubeIframeLoader.load(function(YT) {
              new YT.Player(key, {
              height: '300',
              width: '320',
              videoId: videoId,
              playerVars: { 'rel': 0 }
            })
          })
      });
    },
    loadVideos: async function() {
      try {
        let response = await axios.get('/api/youtube')
        this.videos = response.data
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>
