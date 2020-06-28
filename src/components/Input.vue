<template>
    <div>
        <input type="text" class="form-control" :name="name">
        <div class="invalid-feedback">{{ feedback }}</div>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        feedback: String,
        name: String
    }
}
</script>