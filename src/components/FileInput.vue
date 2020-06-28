<template>
    <div>
        <input @change="getFileName" type="file" ref="audioInput" hidden :name="name">
        <div @click="$refs.audioInput.click()" class="btn btn-primary">{{ text }}</div>
        <div class="text-white">{{ fileName }}</div>
    </div>
</template>

<script>
export default {
    name: 'FileInput',
    props: {
        name: String,
        text: String
    },
    data() {
        return {
            fileName: ''
        }
    },
    methods: {
        getFileName: function() {
            this.fileName = this.$refs.audioInput.files[0] ? this.$refs.audioInput.files[0].name : ''
        }
    }
}
</script>