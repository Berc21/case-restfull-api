<template>
  <div id="app">
    <Navbar />
      <router-view />
  </div>
</template>

<script>
import Shops from './components/Shops.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Shops,
    Navbar
  }
}
</script>

<style>

</style>
