<template>
    <div class="works">
        <div class="work">
            <Audios :audios="audios"/>
        </div>
<!--        <div class="work">-->
<!--            <Videos/>-->
<!--        </div>-->
    </div>
</template>

<script>
    import Audios from '@/components/Audios'

    export default {
        components: {
            Audios,
        },
        data() {
          return {
            audios: [
              {
                title: ['Alicia Choi', 'G. Enescu “Impressions d\'enfance”'],
                image: 'img/01.jpg',
                description: 'Amaizing description',
                audio: 'audio/alicia_choi.wav'
              },
              {
                title: ['Yuki Isami, Natsuki Hiratsuka', 'M. Miyagi “Haru na Umi“'],
                image: 'img/02.jpg',
                description: 'Amaizing description',
                audio: 'audio/yuki.wav'
              },
              {
                title: ['Iceberg Quartet', 'J. Haydn “String Quartet op. 76”'],
                image: 'img/03.jpg',
                description: 'Amaizing description',
                audio: 'audio/iceberg.wav'
              },
              {
                title: ['Maria Budacova', 'F. Liszt “Prelude and Fuge”'],
                image: 'img/04.jpg',
                description: 'Amaizing description',
                audio: 'audio/liszt.wav'
              },
              {
                title: ['Duo Bednarz - Hiratsuka', 'G. Kancheli “Sunny Night”'],
                image: 'img/05.jpg',
                description: 'Amaizing description',
                audio: 'audio/bednarz.wav',
                link: {
                  url: 'https://metis-islands.bandcamp.com/album/giya-kancheli-sunny-night',
                  title: 'Checkout more'
                }
              },
              {
                title: ['Z4 Quartet', 'W. A. Mozart “Piano Quartet K. 493”'],
                image: 'img/06.jpg',
                description: 'Amaizing description',
                audio: 'audio/mozart.wav'
              },
              {
                title: ['The Cygnus Trio', 'K. Schubring “Music for a Particulary Sparkling Afternoon“'],
                image: 'img/07.jpg',
                description: 'Amaizing description',
                audio: 'audio/schubring.wav',
                height: 125,
                link: {
                  url: 'https://thecygnustrio.com/store',
                  title: 'Checkout more'
                }
              },
              {
                title: ['JACK Quartet', 'Zosha Di Castri “Quartet No. 1”'],
                image: 'img/08.jpg',
                description: 'Amaizing description',
                audio: 'audio/jack.wav'
              },
              {
                title: ['National Youth Orchestra of Canada, Michael Franci', 'G. Mahler “Symphony no. 5”'],
                image: 'img/09.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/nyo.wav'
              },
              {
                title: ['Abaco Orchester, Vitali Alekseenok, Natalya Boeva', 'G. Mahler “Kindertotenlieder”'],
                image: 'img/10.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/abaco.wav'
              },
              {
                title: ['Darroch/Cowan Duo', 'K. Hoover “Canyon Echoes”'],
                image: 'img/11.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/hoover.wav'
              },
              {
                title: ['Robert Silverman', 'F.Chopin “Minute Waltz Op. 64”'],
                image: 'img/12.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/silverman.wav'
              },
              {
                title: ['Tom Beghin', 'L. Beethoven “Appassionata op. 57”'],
                image: 'img/13.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/beghin.wav'
              },
              {
                title: ['Bach Festival Orchestra, Julian Pregardien', 'J. S. Bach “Johannes-Passion”'],
                image: 'img/14.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/bach_fest.wav'
              },
              {
                title: ['André Wickenheiser', '“A Happy Little Accident”'],
                image: 'img/15.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/andre.wav',
                link: {
                  url: 'https://www.andrewickenheiser.com/',
                  title: 'Checkout on more'
                }
              },
              {
                title: ['Cole Birney-Stewart', '“The World Without Us”'],
                image: 'img/16.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/birney.wav',
                link: {
                  url: 'https://www.colebirneystewart.com',
                  title: 'Checkout more'
                }
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
      overflow: hidden;
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
