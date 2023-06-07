<template>
  <div>
    <h1>Bien ref</h1>
    <h3>Donc "ancienne" page produit</h3>
    <Infos :route="$route" :cookies="$cookies.getAll()" />
    <Menu />
  </div>
</template>

<script>
import CookieSetter from '../../components/CookieSetter.vue';
import Infos from '../../components/Infos.vue';
import Menu from '../../components/Menu.vue';

export default {
    middleware: ["redirection"],
    components: { CookieSetter, Menu, Infos }
}
</script>