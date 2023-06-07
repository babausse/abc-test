<template>
  <div>
    <div>Paramètres: {{ route.params }}</div>
    <div>QueryString: {{ route.query }}</div>
    <div>Cookies: {{ cookies }}</div>
  </div>
</template>

<script>
export default {
  props: ['cookies', 'route']
}
</script>