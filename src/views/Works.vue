<template>
    <div class="works">
        <div class="work">
            <Audios :audios="audios"/>
        </div>
        <div class="work">
            <Videos/>
        </div>
    </div>
</template>

<script>
    import Audios from '@/components/Audios'
    import Videos from '@/components/Videos'

    export default {
        components: {
            Audios,
            Videos
        },
        data() {
          return {
            audios: [
              {
                title: 'My audio',
                image: 'img/bach_fest.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/console.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/cyngus_trio.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/get_event_image.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/accident.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/hannah.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/iceberg_uartet.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/mahler.jpg',
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/matt.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/odyssey.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/quartet.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/sunny_night.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/yuki.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
              {
                title: 'My audio',
                image: 'img/zocha.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/happy_little_accidant_andre.wav'
              },
            ],
          }
        },
        mounted() {
            this.$el.style.maxHeight = 'fit-content'
        }
    }
</script>
<style>
    .works {
        display: flex;
        flex-wrap: wrap;
        background: linear-gradient(0deg, rgba(241,241,242,1) 100%, rgba(183,228,247,1) 100%);
    }
    .work {
        width: 100%;
    }
    .display-tablet {
        display: none;
    }
    .display-deckstop {
        display: block;
    }
    @media screen and (max-width: 1200px) {
        .work {
            width: 100%;
        }
    }
    @media screen and (max-width: 768px) {
        .display-tablet {
            display: block;
        }
        .display-deckstop {
            display: none;
        } 
    }
</style>
