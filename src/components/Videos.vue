<template>
    <v-row class="videos p-3">
        <v-col lg="6" md="12" class="video-container" v-for="(video, index) in videos" :key="index">
          <v-card class="video-card" rounded>
            <vue-plyr>
              <!-- <video
                  controls
                  crossorigin
                  playsinline
              >
                  <source
                  size="720"
                  :src="video.video"
                  type="video/mp4"
                  />
              </video> -->
              <div data-plyr-provider="youtube" data-plyr-embed-id="RGFgQLn74Ls"></div>
            </vue-plyr>
            <v-card-title>
              {{ video.title }}
            </v-card-title>
            <v-card-text>
              {{ video.description }}
            </v-card-text>
          </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                videos: [
                    {
                        title: 'My video',
                        description: 'Amaizing description',
                        video: 'video/with_subtitles.mp4'
                    },
                    {
                        title: 'My video',
                        description: 'Amaizing description',
                        video: 'video/with_subtitles.mp4'
                    }
                ]
            }
        },
    }
</script>
<style lang="scss">
  .video-card {
    &:hover {
      box-shadow: unset;
    }
  }
</style>