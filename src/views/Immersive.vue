<template>
    <div class="immersive-container">
      <div class="text"><span>{{ $t('immersive') }}</span></div>
      <div class="immersive-audios">
        <Audios :audios="audios" />
      </div>
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
</template>

<script>
  import Audios from '../components/Audios'
    export default {
        name: "Immersive",
        components: {
          Audios
        },
        data() {
          return {
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
        }
    }
</script>

<style lang="scss">
  .immersive-container {
    background-image: url("../assets/immersive-pick.jpg");
    background-size: cover;
    padding: 20px;
    font-size: 17px;

    .text {
      background-color: rgba(0, 0, 0, 0.3);
      color: #f8f9fa;
      padding: 10px;
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
    .plyr {
      height: auto;
    }
  }
</style>
