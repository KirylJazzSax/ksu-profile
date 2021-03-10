<template>
    <vue-custom-scrollbar class="awards-container">
<!--        <plane v-show="imageLoading"/>-->
<!--        <img class="image-hidden" src="@/assets/ksu-back.jpg" alt="">-->
        <div class="list-group awards-list">
            <a :class="{
              'm-1': true,
              'list-group-item': false,
               'list-group-item-action': false,
                'award': true,
                 'disabled': award.link === null
            }"
                target="_blank" 
                :href="award.link" 
                :key="index" 
                v-for="(award, index) in awards">
                {{ award.name }}
            </a>
        </div>
    </vue-custom-scrollbar>
</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'
    import "vue-custom-scrollbar/dist/vueScrollbar.css"
    // import Plane from 'vue-loading-spinner/src/components/Plane'

    export default {
        name: "Awards",
        components: {
            vueCustomScrollbar,
            // Plane
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
        mounted() {
            // const awardPickture = this.$el.querySelector('.image-hidden')
            // awardPickture.onload = () => {
            //     awardPickture.parentNode.style.backgroundImage = `url('${awardPickture.src}')`
            //     this.imageLoading = false
            // }
        }
    }
</script>

<style lang="scss">
    .awards-container {
        padding: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: calc(100vh - 151px);
        overflow: scroll;
        background-color: #607D8B;
        position: relative;
      background-image: url("../assets/awards-back.jpg");
      background-size: cover;

        .spinner.spinner--plane {
            position: absolute;
            left: 50%;
            top: 50%;
            background: transparent;
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

        .image-hidden {
            display: none;
        }

        .awards-list {
          background-color: rgba(255, 255, 255, 0.3);

            .list-group-item {
                background-color: rgba(255, 255, 255, 0.2);
                color: #fff;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.3);
                    cursor: pointer;                
                }
            }
            .award {
              text-align: left;
              //text-decoration: none;
              color: #000;
            }
            .disabled {
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }
    
</style>
