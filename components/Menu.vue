<template>
  <div>
    <CookieSetter v-for="v in ['A', 'B', 'C']" :value="v" />
    <LinkButton v-for="v in ['/neuf/test', '/neuf/test-3D', '/neuf/test-3D1']" :link="v" />
    <LinkButton v-for="v in ['/neuf/test?foo=bar', '/neuf/test-3D?foo=bar', '/neuf/test-3D1?foo=bar']" :link="v" />
  </div>
</template>

<style scoped>
div {
  margin-top: 15px;
}
</style>