<template>
  <a href="#">{{ tag }}</a>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>