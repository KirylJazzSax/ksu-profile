<template>
  <div class="audio-container">
    <v-card
        rounded
        class="mb-4 d-flex flex-column audio-card">
      <v-img
          class="audio-img"
          :src="require('@/assets/' + audio.image)"
          :height="windowWidth > 600 ? '220px' : '400px'"
          @click="showLightbox(audio.image)"
      >
        <template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-col cols="12" align-self="center">
              <v-progress-circular
                  indeterminate
                  color="red lighten-5"
              ></v-progress-circular>
            </v-col>
          </v-row>
        </template>
      </v-img>

      <v-card-title>
        {{ audio.title }}
      </v-card-title>

      <v-card-actions class="mt-auto">
        <vue-plyr>
          <audio controls crossorigin playsinline>
            <source
                :src="audio.audio"
                type="audio/wav"
            />
          </audio>
        </vue-plyr>
      </v-card-actions>
    </v-card>
    <lightbox
        ref="lightbox"
        :images="images"
        :directory="''"
        :timeoutDuration="5000"/>
  </div>
</template>
<script>
import Lightbox from 'vue-my-photos'

export default {
  name: 'Audio',
  components: {
    Lightbox,
  },
  data() {
    return {
      images: [],
      isLoading: true,
      windowWidth: window.innerWidth
    }
  },
  props: {
    audio: Object
  },
  mounted() {
    this.images.push({
      'name': this.audio.image,
      'alt': '',
      'filter': 'nature',
      'id': 'album-image'
    })
  },
  methods: {
    showLightbox: function (imageName) {
      this.$refs.lightbox.show(imageName);
    },
  },
}
</script>
<style lang="scss">

.audio-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  width: 100%;
  justify-content: center;

  .audio-card {
    transition: all .25s ease;
    overflow: hidden;

    &:hover {
      transform: scale(1.05);
      transition: all .25s ease;
    }
  }
}

</style>
