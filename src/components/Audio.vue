<template>
  <div class="audio-container">
    <!-- <div class="lead mb-3 display-deckstop">{{ audio.title }}</div> -->
    <div :class="{'mb-3': true, 'image': true}">
      <plane v-show="isLoading"></plane>
      <img v-show="!isLoading" :src="audio.image"
           @click="showLightbox(audio.image)"
           class="img-fluid">
      <div v-show="!isLoading && audio.title !== null" class="image-title">{{ audio.title }}</div>
    </div>
    <vue-plyr>
      <audio controls crossorigin playsinline>
        <source
            :src="audio.audio"
            type="audio/wav"
        />
      </audio>
    </vue-plyr>
    <lightbox
        ref="lightbox"
        :images="images"
        :directory="''"
        :timeoutDuration="5000"/>
  </div>
</template>
<script>
import Lightbox from 'vue-my-photos'
import Plane from 'vue-loading-spinner/src/components/Plane'

export default {
  name: 'Audio',
  components: {
    Lightbox,
    Plane
  },
  data() {
    return {
      images: [],
      isLoading: true
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
    const img = this.$el.querySelector('img')
    img.onload = () => {
      if (img.parentNode) {
        img.parentNode.style.height = 'auto'
      }
      this.isLoading = false
    }
  },
  methods: {
    showLightbox: function (imageName) {
      this.$refs.lightbox.show(imageName);
    },
  },
}
</script>
<style lang="scss">

.spinner.spinner--plane {
  align-self: center;
}

.audio-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  width: 100%;
  justify-content: center;
}

.audio {
  display: grid;
  width: 50%;
  align-content: center;
  justify-content: center;
}

.audio-description {
  display: grid;
  width: 50%;
}

.image {
  display: grid;
  justify-items: center;
  align-items: flex-end;
  z-index: 1;
  height: 220px;
  position: relative;
  &img {
    max-width: 100%;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .image-title {
    position: absolute;
    height: 75px;
    padding: 0 5px;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    bottom: 0;
    left: 0;
    display: grid;
    align-items: center;
  }
}

audio {
  outline: none;
}

.spinner.spinner--plane {
  margin: auto;
}

#top .plane {
  background: rgba(99, 50, 62, 1);
}

#middle .plane {
  background: rgb(49, 25, 31) !important;
}

#bottom .plane {
  background: rgba(99, 50, 62, 1);
}

/* @media screen and (max-width: 1100px) {
    .audio-container {
        width: 45%;
    }

    .image img {
        max-width: 44%;
    }
} */
/* @media screen and (max-width: 894px) {
    .image img {
        max-width: 52%;
    }
} */
/* @media screen and (max-width: 768px) {
    .image img {
        max-width: 62%;
    }
} */
@media screen and (max-width: 600px) {
  .audio-container {
    /* width: 90%; */
    margin-bottom: 20px;
    display: grid;
  }
  .image img {
    margin-top: 0;
    /* max-width: 80%; */
  }
}
</style>
