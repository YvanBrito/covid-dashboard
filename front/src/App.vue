<template>
  <div class="canvas">
    <NavBar/>
    <Dashboard/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Dashboard from './components/Dashboard.vue'
// https://covid.saude.gov.br/
export default {
  name: 'App',
  components: {
    NavBar,
    Dashboard
  }
}
</script>

<style>

</style>
