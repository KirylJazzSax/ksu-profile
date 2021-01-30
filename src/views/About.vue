<template>
  <v-row class="px-2">
    <v-col lg="6" md="12">
      <v-img
          height="100%"
          :src="require('@/assets/ksu-back-another.jpg')"
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
    </v-col>
    <v-col lg="6" md="12" class="px-4 text-justify">
      <v-card>
        <v-card-text>
          {{ $t('about') }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>

export default {
    components: {
        // vueCustomScrollbar,
        // Plane
    },

    data() {
        return {
            settings: {
                suppressScrollY: false,
                suppressScrollX: false,
                wheelPropagation: false
            },
            imageLoading: true,
            percentage: 0,
            breakPoint: 992
        }
    },
    // mounted() {
    //     // this.percentage = ((5848 - 3898) / 5848) * 100
    //     this.percentage = ((6000 - 4000) / 6000) * 100
    //     const ksuPickContainer = this.$el.querySelector('.ksu-picture')
    //     const windowWidth = window.innerWidth
    //     if (windowWidth <= this.breakPoint) {
    //         const calculatedHeight = Math.floor(windowWidth - (windowWidth * (this.percentage / 100)))
    //         ksuPickContainer.style.height = calculatedHeight + 'px'
    //     }
    //     const ksuPick = this.$el.querySelector('.image-hidden')
    //     ksuPick.onload = () => {
    //         ksuPickContainer.style.backgroundImage = `url('${ksuPick.src}')`
    //         this.imageLoading = false
    //     }
    // }
}
</script>
<style>
    /*.about-text {*/
    /*    !* background-color: rgba(99, 50, 62, 1); *!*/
    /*    !*background-color: #926f55;*!*/
    /*    background-color: #edfaff;*/
    /*    text-align: justify;*/
    /*    width: 50%;*/
    /*    height: calc(100vh - 151px);*/
    /*    z-index: 1;*/
    /*    margin-left: auto;*/
    /*    color: rgba(0, 0, 0, 0.7);*/
    /*}*/
    /*.ksu-picture {*/
    /*    width: 50%;*/
    /*    height: 100%;*/
    /*    !* background-image: url("../assets/ksu-back.jpg"); *!*/
    /*    background-size: cover;*/
    /*    background-position: 47%;*/
    /*    position: absolute;*/
    /*    display: flex;*/
    /*    font-size: 14px;*/
    /*}*/
    /*.image-hidden {*/
    /*    display: none;*/
    /*}*/
    /*.spinner.spinner--plane {*/
    /*    margin: auto;*/
    /*}*/
    /*#top .plane {*/
    /*    background: rgba(99, 50, 62, 1);*/
    /*}*/
    /*#middle .plane {*/
    /*    background: rgb(49, 25, 31) !important;*/
    /*}*/
    /*#bottom .plane {*/
    /*    background: rgba(99, 50, 62, 1);*/
    /*}*/
    /* @media screen and (min-height: 800px) {
        .about-text {
            font-size: 17px;
        }
    }
    @media screen and (min-height: 900px) {
        .about-text {
            font-size: 18px;
        }
    }
    @media screen and (min-height: 950px) {
        .about-text {
            font-size: 19px;
        }
    }
    @media screen and (min-height: 1050px) {
        .about-text {
            font-size: 20px;
        }
    } */
    /*@media screen and (max-width: 992px) {*/
    /*    .about-text {*/
    /*        width: 100%;*/
    /*        margin-left: 0;*/
    /*    }*/
    /*    .ksu-picture {*/
    /*        width: 100%;*/
    /*        background-size: contain;*/
    /*        background-position: top;*/
    /*        position: unset;*/
    /*    }*/
    /*}*/
    /*@media screen and (max-width: 768px) {*/
    /*    .ksu-picture {*/
    /*        background-size: contain;*/
    /*        background-position: top;*/
    /*    }*/
    /*    .about-text {*/
    /*        height: 600px;*/
    /*    }*/
    /*}*/
    /* @media screen and (max-width: 528px) {
        .ksu-picture {
            height: 266px;
        }
    }
    @media screen and (max-width: 400px) {
        .ksu-picture {
            height: 212px;
        }
    } */
</style>
