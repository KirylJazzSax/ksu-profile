<template>
    <div>
        <div class="d-flex justify-content-start">
            <img class="img-fluid w-25" v-for="thumb in images"
                 :key="thumb.id"
                 @click="showLightbox(thumb.name)"
                 :src="thumbnailDir + thumb.name"
                 :alt="thumb.alt"
                 :title="thumb.alt" />
        </div>

        <lightbox
                ref="lightbox"
                :images="images"
                :directory="thumbnailDir"
                :timeoutDuration="5000" />
    </div>
</template>

<script>
    import Lightbox from 'vue-my-photos'

    export default {
        name: "Photos",
        components: {
            Lightbox
        },
        data() {
            return {
                thumbnailDir: 'https://ksu-profile.s3.eu-central-1.amazonaws.com/',
                images: [],
            }
        },
        mounted() {
            this.images = [{
                'name': 'ksu-back.jpg',
                'alt': '',
                'filter': 'nature',
                'id': 'image1'
            },]
        },
        methods: {
            showLightbox: function (imageName) {
                this.$refs.lightbox.show(imageName);
            },
        },
    }
</script>

<style scoped>

</style>
