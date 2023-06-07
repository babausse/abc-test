<template>
  <div>
    <h1>Neuf ref</h1>
    <h3>Donc 3D</h3>
    <Infos :route="$route" :cookies="$cookies.getAll()" />
    <Menu />
  </div>
</template>

<script>
import Menu from '../../components/Menu.vue';

export default {
    middleware: ["redirection"],
    components: { Menu },
    beforeCreate() {
      this.$route.params.ref = this.$route.params.pathMatch
    }
}
</script>