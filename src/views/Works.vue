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
