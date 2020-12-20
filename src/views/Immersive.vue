<template>
    <div class="immersive-container">
      <div class="immersive-text-with-picture">
        <div class="ksu-immersive-picture">
          <plane v-show="imageLoading"></plane>
          <img class="image-hidden" src="../assets/immersive-pick.jpg" alt="">
        </div>
        <div class="immersive-text">
          <div class="mb-3">{{ $t('immersive') }}</div>
          <div class="list-group immersive-awards-list">
            <a :class="{'list-group-item': true, 'list-group-item-action': true}"
               target="_blank"
               :href="award.link"
               :key="index"
               v-for="(award, index) in awards">
              {{ award.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="immersive-audios">
        <Audios :audios="audios" />
      </div>
    </div>
</template>

<script>
  import Audios from '../components/Audios'
  import Plane from 'vue-loading-spinner/src/components/Plane'
    export default {
        name: "Immersive",
        components: {
          Audios,
          Plane
        },
        data() {
          return {
            imageLoading: true,
            percentage: 0,
            breakPoint: 992,
            audios: [
              {
                title: 'My audio',
                image: 'img/immersive-audio.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/immersive-audio.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
            ],
            awards: [
              {
                link: 'https://tonmeistertagung.com/en/2018/program/?id=13288',
                name: 'Tonmeistertagung 2018 ‘Mixing classical music in 3D is actually a challenge!’'
              },
              {
                link: 'https://tonmeister.org/en/vdt-live/program/',
                name: 'VDT Live 2020 ‘Reverb as creative tool for classical music in 3D’'
              },
              {
                link: 'https://tonmeister.org/en/vdt-live/program/',
                name: 'VDT Live 2020 ‘Mixing classical music in Binaural’'
              },
            ]
          }
        },
        mounted() {
          this.$el.style.maxHeight = 'fit-content'
          this.percentage = ((4032 - 3024) / 4032) * 100
          const ksuPickContainer = this.$el.querySelector('.ksu-immersive-picture')
          const windowWidth = window.innerWidth
          if (windowWidth <= this.breakPoint) {
            // const calculatedHeight = Math.floor(windowWidth - (windowWidth * (this.percentage / 100)))
            // ksuPickContainer.style.height = calculatedHeight + 'px'
            ksuPickContainer.style.display = 'none'
          }
          const ksuPick = this.$el.querySelector('.image-hidden')
          ksuPick.onload = () => {
            if (windowWidth <= this.breakPoint) {
              const ksuPickAndTextContainer = this.$el.querySelector('.immersive-text-with-picture')
              ksuPickAndTextContainer.style.backgroundImage = `url('${ksuPick.src}')`
            } else {
              ksuPickContainer.style.backgroundImage = `url('${ksuPick.src}')`
            }
            this.imageLoading = false
          }
        }
    }
</script>

<style lang="scss">
  .immersive-container {
    //background-image: url("../assets/immersive-pick.jpg");
    //background-size: cover;
    //padding: 20px;
    //font-size: 17px;
    background-color: #e4e4e3;
    font-size: 15px;

    .immersive-text-with-picture {
      background-size: cover;
      background-position: center;
      .immersive-text {
        text-align: justify;
        width: 50%;
        height: calc(100vh - 151px);
        z-index: 1;
        margin-left: auto;
        padding: 30px;

        @media screen and (max-width: 992px) {
          width: 100%;
          height: auto;
          color: white;
          padding: 15px;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }

      .ksu-immersive-picture {
        width: 50%;
        height: calc(100vh - 151px);
        /* background-image: url("../assets/ksu-back.jpg"); */
        background-size: cover;
        background-position: 47%;
        position: absolute;

        @media screen and (max-width: 992px) {
          width: 100%;
        }

        .image-hidden {
          display: none;
        }

      }
      .list-group-item {
        background-color: rgba(0, 0, 0, 0.4);
        color: #f8f9fa;

        &:hover {
          background-color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          color: black;
        }
      }

      @media screen and (max-width: 992px) {
        display: flex;
        padding: 15px;
      }
    }
    .plyr {
      height: auto;
    }
  }
</style>
