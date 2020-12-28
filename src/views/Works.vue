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
                title: 'Alicia Choi. George Enescu. Impressions d\'enfance Op. 28 (Me╠Бne╠Бtrier)',
                image: 'img/01.jpg',
                description: 'Amaizing description',
                audio: 'audio/alicia_choi.wav'
              },
              {
                title: 'Yuki Isami (flute) Natsuki Hiratsuka (piano). M. Miyagi Haru na Umi',
                image: 'img/02.jpg',
                description: 'Amaizing description',
                audio: 'audio/yuki.wav'
              },
              {
                title: 'Iceberg Quartet. J. Haydn String Quartet No.4 (Adagio)',
                image: 'img/03.jpg',
                description: 'Amaizing description',
                audio: 'audio/iceberg.wav'
              },
              {
                title: 'Liszt - Prelude and Fuge',
                image: 'img/04.jpg',
                description: 'Amaizing description',
                audio: 'audio/liszt.wav'
              },
              {
                title: 'Duo Bednarz - Hiratsuka Giya Kancheli Sunny Night (arr. Claude Marc Bourget)',
                image: 'img/05.jpg',
                description: 'Amaizing description',
                audio: 'audio/bednarz.wav'
              },
              {
                title: 'Mozart Qaurtet in Es-Dur Larghetto',
                image: 'img/06.jpg',
                description: 'Amaizing description',
                audio: 'audio/mozart.wav'
              },
              {
                title: 'K. Schubring - Music for a Particulary Sparkling Afternoon',
                image: 'img/07.jpg',
                description: 'Amaizing description',
                audio: 'audio/schubring.wav'
              },
              {
                title: 'JACK Quartet. Zosha Di Castri. Quartet No. 1',
                image: 'img/08.jpg',
                description: 'Amaizing description',
                audio: 'audio/jack.wav'
              },
              {
                title: 'NYO Mahler 5. Trauermarsch In gemessenem Schritt Streng Wie ein Kondukt',
                image: 'img/09.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/nyo.wav'
              },
              {
                title: 'Abaco Orchester Natalya Boeva Mahler Kinder-Totenlieder. Nun seh ich wohl...',
                image: 'img/10.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/abaco.wav'
              },
              {
                title: 'K. Hoover Canyon Echoes (Serenade)',
                image: 'img/11.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/hoover.wav'
              },
              {
                title: 'Robert Silverman. Fryderyk Chopin Minute Waltz Op. 64 No. 1 ',
                image: 'img/12.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/silverman.wav'
              },
              {
                title: 'Tom Beghin Beethoven Appassionata',
                image: 'img/13.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/beghin.wav'
              },
              {
                title: 'Bach Festival Orchestra, Julian Pre╠Бgardien Bach Johannes-Passion',
                image: 'img/14.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/bach_fest.wav'
              },
              {
                title: 'Andre╠Б Wickenheiser',
                image: 'img/15.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/andre.wav'
              },
              {
                title: 'Cole Birney-Stewart The World Without Us',
                image: 'img/16.jpg',
                imageHeight: 320,
                description: 'Amaizing description',
                audio: 'audio/birney.wav'
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
