<template>
    <div class="text-light">
        <h1 class="mb-2">Upload audio</h1>
        <div class="m-auto w-25">
            <form enctype="multipart/form-data">
                <FileInput class="mb-3" :text="fileInputText" :name="name" />
                <div>Artist name</div>
                <Input class="mb-3" :name="artistName" />
                <div>Title song</div>
                <Input class="mb-3" :name="titleSong" />
            </form>
            <Button class="mb-3" :clickEvent="uploadFile" :text="text" />
        </div>
        <h1>Upload link from youtube</h1>
        <div class="m-auto w-25">
            <form>
                <Input class="mb-3" :name="nameInput" />
            </form>
            <Button :clickEvent="uploadFromYoutube" :text="buttonInputText" />
        </div>
    </div>
</template>
<script>
    import Button from "@/components/Button"
    import FileInput from "@/components/FileInput"
    import Input from '@/components/Input'
    import axios from "axios";

export default {
    name: 'Ksu',
    components: {
        Button,
        FileInput,
        Input
    },
    data() {
        return {
            text: 'Upload file',
            fileInputText: 'Choose file',
            name: 'audio',
            nameInput: 'youtubeId',
            buttonInputText: 'Upload from youtube',
            artistName: 'artist',
            titleSong: 'title'
        }
    },
    methods: {
        uploadFile: async function() {
            let audioInput = document.querySelector(`input[name=${this.name}]`)
            let artistInput = document.querySelector(`input[name=${this.artistName}]`)
            let songTitle = document.querySelector(`input[name=${this.titleSong}]`)

            if (!audioInput.files[0] || artistInput.value == '' || songTitle.value == '') {
                this.$notify({
                    group: 'media',
                    type: 'warn',
                    title: 'Notification',
                    text: 'You need to choose file and type artist name'
                })
                return
            }

            let formData = new FormData();
            formData.append('artist', artistInput.value)
            formData.append('title', songTitle.value)
            formData.append('audio', audioInput.files[0])

            try {
                let response = await axios.post('/api/upload', formData)
                this.notify(response)
                artistInput.value = ''
                songTitle.value = ''
            } catch(err) {
                console.log(err)
            }
        },
        uploadFromYoutube: async function() {
            let input = document.querySelector(`input[name=${this.nameInput}]`)
            try {
                let response = await axios.post('/api/youtube', { videoId: input.value }) 
                this.notify(response)
                input.value = ''
            } catch(err) {
                console.log (err)
            }
        },
        notify: function(response) {
            if (response.status === 200) {
                this.$notify({
                    group: 'media',
                    title: 'Cool!',
                    text: response.data.message,
                    type: 'success'
                })
            } else {
                this.$notify({
                    group: 'media',
                    title: 'Something wrong',
                    text: response.data.message,
                    type: 'error'
                })
            }
        }
    }
}
</script>
