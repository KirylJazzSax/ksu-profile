<template>
    <div class="row">
        <div class="col-6">
            <Audios/>
        </div>
        <div class="col-6">
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
