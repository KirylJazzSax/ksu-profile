<template>
    <div class="works">
        <div class="work">
            <Audios/>
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
        }
    }
</script>
<style>
    .works {
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
        background: linear-gradient(0deg, rgba(241,241,242,1) 100%, rgba(183,228,247,1) 100%);
    }
    .work {
        width: 50%;
    }
    @media screen and (max-width: 1200px) {
        .work {
            width: 100%;
        }
    }
</style>
