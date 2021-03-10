<template>
  <div class="px-2 immersive-container">
    <div class="card overflow-hidden">
      <div class="card-body">
        <div class="card-text text-justify">
          <div class="row">
<!--            <div class="col-12 col-lg-6 col-md-12">-->
<!--              <div class="row">-->
<!--                <div :key="index" v-for="(item, index) in images" class="col-6 mb-3">-->
<!--                  <img :src="item.src" class="rounded img-fluid" alt="">-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <div class="col-12 col-lg-6 col-md-12 immersive-text mb-2">
              <div class="mb-3">{{ $t('immersive_1') }}</div>
              <div class="mb-3">{{ $t('immersive_2') }}</div>
<!--              <div class="list-group immersive-awards-list mb-3">-->
<!--                <a :class="{'list-group-item': true, 'list-group-item-action': true}"-->
<!--                   target="_blank"-->
<!--                   :href="award.link"-->
<!--                   :key="index"-->
<!--                   v-for="(award, index) in awards">-->
<!--                  {{ award.name }}-->
<!--                </a>-->
<!--              </div>-->
            </div>
            <div class="col-12 col-lg-12 col-md-12">
              <div class="row">
                <div :key="index" v-for="(item, index) in images" class="col-6 mb-3">
                  <img :src="item.src" class="rounded img-fluid" alt="">
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="list-group immersive-awards-list mb-3">
                <a :class="{'list-group-item': false, 'list-group-item-action': false, 'text-dark': true}"
                   target="_blank"
                   :href="award.link"
                   :key="index"
                   v-for="(award, index) in awards">
                  {{ award.name }}
                </a>
              </div>
            </div>
<!--            <div class="col-12 d-flex justify-content-center justify-content-lg-end">-->
<!--              <Audios :audios="audios" />-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Audios from '../components/Audios'
  // import Plane from 'vue-loading-spinner/src/components/Plane'
    export default {
        name: "Immersive",
        components: {
          // Audios,
          // Plane
        },
        data() {
          return {
            imageLoading: true,
            percentage: 0,
            breakPoint: 992,
            audios: [
              {
                title: ['Elodie Bouchard','Anthony Harvey Torna', 'deh torna pargoletto mio'],
                image: 'img/immersive/_01.jpg',
                description: 'Amaizing description',
                audio: 'audio/_01.wav'
              },
            ],
            images: [
              // {src: 'img/immersive/01.jpg'},
              {src: 'img/immersive/02.jpg'},
              {src: 'img/immersive/03.jpg'},
              // {src: 'img/immersive/04.png'},

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
          // this.percentage = ((4032 - 3024) / 4032) * 100
          // const ksuPickContainer = this.$el.querySelector('.ksu-immersive-picture')
          // const windowWidth = window.innerWidth
          // if (windowWidth <= this.breakPoint) {
          //   // const calculatedHeight = Math.floor(windowWidth - (windowWidth * (this.percentage / 100)))
          //   // ksuPickContainer.style.height = calculatedHeight + 'px'
          //   ksuPickContainer.style.display = 'none'
          // }
          // const ksuPick = this.$el.querySelector('.image-hidden')
          // ksuPick.onload = () => {
          //   if (windowWidth <= this.breakPoint) {
          //     const ksuPickAndTextContainer = this.$el.querySelector('.immersive-text-with-picture')
          //     ksuPickAndTextContainer.style.backgroundImage = `url('${ksuPick.src}')`
          //   } else {
          //     ksuPickContainer.style.backgroundImage = `url('${ksuPick.src}')`
          //   }
          //   this.imageLoading = false
          // }
        }
    }
</script>

<style lang="scss">
  .card {
    //background: #CFD8DC;
    background: none;
  }
  .immersive-container {
    //background-image: url("../assets/immersive-pick.jpg");
    //background-size: cover;
    //padding: 20px;
    //font-size: 17px;
    //background-color: #e4e4e3;
    //font-size: 15px;
    background-image: url("../../public/img/immersive/01.jpg");
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;

    .immersive-text {
      background-color: rgba(255,255,255, 0.5);
    }

    .immersive-text-with-picture {
      background-size: cover;
      background-position: center;
      position: relative;
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
        display: flex;
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
