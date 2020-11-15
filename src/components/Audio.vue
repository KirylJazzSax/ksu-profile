<template>
    <div class="audio-container">
        <!-- <div class="lead mb-3 display-deckstop">{{ audio.title }}</div> -->
        <div :class="{'mb-3': true, 'image': true}">
            <circle10 v-show="isLoading"></circle10>
            <img v-show="!isLoading" :src="audio.image" 
                @click="showLightbox(audio.image)" 
                class="img-fluid">
        </div>
        <vue-plyr>
            <audio controls crossorigin playsinline>
                <source
                    :src="audio.audio"
                    type="audio/wav"
                />
            </audio>
        </vue-plyr>
        <lightbox
                ref="lightbox"
                :images="images"
                :directory="''"
                :timeoutDuration="5000" />
    </div>
</template>
<script>
import Lightbox from 'vue-my-photos'
import Circle10 from 'vue-loading-spinner/src/components/Circle10'

export default {
    name: 'Audio',
    components: {
        Lightbox,
        Circle10
    },
    data() {
        return {
            images: [],
            isLoading: true
        }
    },
    props: {
        audio: Object
    },
    mounted() {
        this.images.push({
            'name': this.audio.image,
            'alt': '',
            'filter': 'nature',
            'id': 'album-image'
        })
        const img = this.$el.querySelector('img')
        img.onload = () => {
            this.isLoading = false
        }
    },
    methods: {
        showLightbox: function (imageName) {
            this.$refs.lightbox.show(imageName);
        },
    },
}
</script>
<style>
    .spinner.spinner--circle-10 {
        align-self: center;
    }
    .audio-container {
        display: flex;
        flex-wrap: wrap;
        row-gap: 10px;
        width: 23%;
        justify-content: center;
    }
    .audio {
        display: grid;
        width: 50%;
        align-content: center;
        justify-content: center;
    }
    .audio-description {
        display: grid;
        width: 50%;
    }
    .image {
        display: grid;
        justify-items: center;
        align-items: flex-end;
        z-index: 1;
        height: 220px;
    }
    .image img {
        max-width: 70%;
        margin-top: 20px;
    }
    .image img:hover {
        cursor: pointer;
    }
    audio {
        outline: none;
    }
    @media screen and (max-width: 1100px) {
        .audio-container {
            width: 45%;
        }

        .image img {
            max-width: 44%;
        }
    }
    @media screen and (max-width: 894px) {
        .image img {
            max-width: 52%;
        }
    }
    @media screen and (max-width: 768px) {
        .image img {
            max-width: 62%;
        }
    }
    @media screen and (max-width: 600px) {
        .audio-container {
            width: 80%;
            margin-bottom: 20px;
        }
        .image img {
            margin-top: 0;
            max-width: 47%;
        }
    }
</style>