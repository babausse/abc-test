<template>
  <button @click="setValue(value)">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    }
  },
  methods: {
    setValue(value) {
      this.$cookies.set('abc-value', value);
      window.location.reload(true)
    }
  }
}
</script>

<style scoped>
button {
  display: inline-block;
  margin: 0px 10px;
}
</style>