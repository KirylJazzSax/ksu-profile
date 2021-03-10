<template>
  <div class="audio-container mb-4">
    <!-- <div class="lead mb-3 display-deckstop">{{ audio.title }}</div> -->
    <div :class="{'image': true}">
      <plane v-show="isLoading"></plane>
      <img v-show="!isLoading" :src="audio.image"
           @click="showLightbox(audio.image)"
           class="img-fluid">
      <div
          class="btn audio-link"
          @click="goTo(audio.link.url)"
          @mouseenter="musicIconEnter"
          @mouseleave="musicIconLeave"
          v-if="audio.hasOwnProperty('link')"
      >
        <div ref="audio_link"
           target="_blank"
           class="audio-button mr-1 text-decoration-none">
          {{ audio.link.title }}
        </div>
        <i class="bi-music-note-list"></i>
      </div>
      <div
          v-show="!isLoading && audio.title.length > 0"
          :style="[audio.hasOwnProperty('height') ? {'height': audio.height + 'px'} : {} ]"
          :class="{
            'image-title': true,
            'with-button': false,
          }">
        <div :key="index" v-for="(title, index) in audio.title">
          {{ title }}
        </div>
      </div>
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
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'Audio',
  components: {
    Lightbox,
    Plane
  },
  data() {
    return {
      images: [],
      isLoading: true,
      timeOutIn: null,
      timeOutOut: null
    }
  },
  props: {
    audio: Object
  },
  mounted() {
    // #D7CCC8 нав
    // картинка и текст местами
    // immersive картинки в вертикально ссылки внизу
    // portfolio иконка
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
    musicIconEnter() {
      this.$refs.audio_link.style.width = '160px'
      clearTimeout(this.timeOutIn)
      clearTimeout(this.timeOutOut)
      this.timeOutIn = setTimeout(() => this.$refs.audio_link.style.opacity = 1, 200)
    },
    musicIconLeave() {
      this.$refs.audio_link.style.opacity = 0
      clearTimeout(this.timeOutOut)
      clearTimeout(this.timeOutIn)
      this.timeOutOut = setTimeout(() => this.$refs.audio_link.style.width = '0', 200)
    },
    goTo(url) {
      window.open(url, '_blank')
    }
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
  .audio-link {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    background: linear-gradient(0deg, rgba(142,188,208,1) 100%, rgba(183,228,247,1) 100%);
    transition: all .35s ease;

    .audio-button {
      width: 0;
      height: 0;
      opacity: 0;
      color: #fff;
      transition: all .35s ease;

      &:hover {
        color: #F5F5F5;
      }
    }
  }
  &:hover {
    .image-title {
      opacity: 1;
      //height: 75px;
    }
  }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.9;
    justify-content: center;
    background: linear-gradient(0deg, rgba(142,188,208,1) 100%, rgba(183,228,247,1) 100%);
    transition: all .35s ease;

    &.with-button {
      height: 100px;
    }

    .audio-button {
      background-color: #ffd8c5;
      color: #4a5464;
    }
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
