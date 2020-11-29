<template>
    <div class="videos d-flex p-3">
        <div class="video-container" v-for="(video, index) in videos" :key="index">
            <div class="lead mb-3">{{ video.title }}</div>
            <vue-plyr>
                <!-- <video
                    controls
                    crossorigin
                    playsinline
                >
                    <source
                    size="720"
                    :src="video.video"
                    type="video/mp4"
                    />
                </video> -->
                <div data-plyr-provider="youtube" data-plyr-embed-id="RGFgQLn74Ls"></div>
            </vue-plyr>
            <div class="video-description">{{ video.description }}</div>
        </div>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
                videos: [
                    {
                        title: 'My video',
                        description: 'Amaizing description',
                        video: 'video/with_subtitles.mp4'
                    },
                    {
                        title: 'My video',
                        description: 'Amaizing description',
                        video: 'video/with_subtitles.mp4'
                    }
                ]
            }
        },
    }
</script>
<style>
    .video-container {
        display: grid;
        justify-items: center;
        width: 45%;
    }
    .video-description {
        align-content: center;
        margin-top: 20px;
    }
    video {
        width: 100%;
    }
    .plyr--video {
        width: 100%;
    }
    .videos {
        flex-wrap: wrap;
        justify-content: space-between;
    }
    @media screen and (max-width: 768px) {
        .video-container {
            width: 100%;
            margin-bottom: 20px;
        }
        .videos {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>