<template>
  <v-row>
    <v-col lg="6" md="12">
      <v-img
          height="100%"
          :src="require('@/assets/ksu-back.jpg')"
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
    <v-col lg="6" md="12">
      <v-card class="p-0">
        <v-list style="background-color: #E0E0E0;"  class="awards-list p-0">
          <v-list-item-group
              color="primary"
          >
            <v-list-item
                v-for="(item, i) in awards"
                :key="i"
            >
              <v-list-item-content>
                <v-list-item-action-text style="text-align: left" @click="openLink(item)" v-text="item.name"></v-list-item-action-text>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

    export default {
        name: "Awards",
        components: {
        },
        data() {
          return {
              imageLoading: true,
              awards: [
                  {
                      link: 'https://www.merging.com/news/press-releases/aes-virtual-vienna-student-prize-award-from-merging',
                      name: '2020 Silver Award at AES Virtual Vienna Recording Competition (Immersive Category)'
                  },
                  {
                      link: 'https://www.merging.com/news/press-releases/aes-virtual-vienna-student-prize-award-from-merging',
                      name: '2020 Gold Award at AES Virtual Vienna Recording Competition (Traditional Acoustic)'
                  },
                  {
                      link: null,
                      name: '2019 John Bradley Prize „Excellence in music recording”'
                  },
                  {
                      name: '2018 Bronze Award at the „Europe\'s Second Student 3D Audio Production Competition in Ambisonics“',
                      link: 'https://tonmeistertagung.com/en/2018/competition/'
                  },
                  {
                      name: '2018 Award of the Bruce Swedien Scholarship Fund „Music First!“ (AES)',
                      link: 'http://www.swedienscholarship.org/'
                  },
                  {
                      name: '2018 Bronze Award at Student Recording Competition (142th AES convention)',
                      link: 'https://www.aes.org/students/blog/2018/8/aes144-student-recording-competition-interview-5'
                  },
                  {
                      name: '2018 CIRMMT Student Research Award',
                      link: 'https://www.cirmmt.org/research'
                  },
                  {
                      name: '2017 Schulich Scholarship, McGill Student Excellence Award',
                      link: null
                  },
                  {
                      name: '2017 “Gaude Polonia” (Scholarship Program of the Polish Ministry of Culture)',
                      link: 'https://www.nck.pl/en/dotacje-i-stypendia/stypendia/programy/gaude-polonia'
                  },
                  {
                      name: '2016 Gold award at Student Recording Competition (140th AES convention)',
                      link: 'https://www.aes.org/students/blog/2016/8/aes140-student-recording-competition-interview-ksenia'
                  },
                  {
                      name: '2006 The 3d place at the competition of piano duets “Debut”',
                      link: null
                  }
              ]
          }
      },
      methods: {
        openLink(item) {
          if (item.link) {
            window.open(item.link, '_blank')
          }
        }
      },
      // mounted() {
      //     const awardPickture = this.$el.querySelector('.image-hidden')
      //     awardPickture.onload = () => {
      //         awardPickture.parentNode.style.backgroundImage = `url('${awardPickture.src}')`
      //         this.imageLoading = false
      //     }
      // }
    }
</script>

<style lang="scss">

</style>
