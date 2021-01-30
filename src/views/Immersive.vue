<template>
  <v-row class="px-2">
    <v-col lg="6" md="12">
      <v-img
          :src="require('@/assets/immersive-pick.jpg')"
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
      <v-card class="mb-3">
        <v-card-text>
          {{ $t('immersive') }}
        </v-card-text>
      </v-card>
      <v-card>
        <v-list shaped>
          <v-list-item-group
              color="primary"
          >
            <v-list-item
                v-for="(item, i) in awards"
                :key="i"
            >
              <v-list-item-content>
                <v-list-item-title @click="openLink(item)" v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
    <v-col cols="12">
      <Audios :audios="audios" />
    </v-col>
  </v-row>
</template>

<script>
  import Audios from '../components/Audios'
    export default {
      name: "Immersive",
      components: {
        Audios,
      },
      data() {
        return {
          imageLoading: true,
          percentage: 0,
          breakPoint: 992,
          audios: [
            {
              title: 'My audio',
              image: 'immersive-back.jpg',
              description: 'Amaizing description',
              audio: 'audio/abaco.wav'
            },
            {
              title: 'My audio',
              image: 'immersive-back.jpg',
              description: 'Amaizing description',
              audio: 'audio/abaco.wav'
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
      methods: {
        openLink: function (item) {
          window.open(item.link, '_blank')
        }
      }
    }
</script>

<style lang="scss">

</style>
