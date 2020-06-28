<template>
    <button class="btn btn-success" @click="clickEvent">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        clickEvent: Function
    }
}
</script>