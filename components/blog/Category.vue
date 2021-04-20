<template>
  <li><a href="#">{{ category }} <span>({{ Math.ceil(Math.random() * 10) }})</span></a></li>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>