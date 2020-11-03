<template>
    <div class="d-flex flex-column p-3">
        <div class="video-container" v-for="(video, index) in videos" :key="index">
            <div class="video">
                <div class="lead mb-3 display-tablet">{{ video.title }}</div>
                <video :src="video.video" controls></video>
                <div class="display-tablet">{{ video.description }}</div>
            </div>
            <div class="video-description">
                <div class="lead mb-3 display-deckstop">{{ video.title }}</div>
                <div class="display-deckstop">{{ video.description }}</div>
            </div>
            
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
                    }
                ]
            }
        },
    }
</script>
<style>
    video {
        max-width: 70%;
    }
    .video-container {
        display: flex;
        flex-wrap: wrap;
    }
    .video-description {
        display: grid;
        align-content: center;
        width: 50%;
    }
    .video {
        width: 50%;
    }
    @media screen and (max-width: 768px) {
        .video-description {
            width: 100%;
        }
        .video {
            width: 100%;
        }
    }
</style>