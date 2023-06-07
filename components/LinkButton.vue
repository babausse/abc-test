<template>
  <a :href="link">{{ link }}</a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  display: inline-block;
  margin: 0px 10px;
}
</style>