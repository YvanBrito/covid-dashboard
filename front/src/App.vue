<template>
  <div class="canvas">
    <NavBar @areaSelected='changeArea'/>
    <Dashboard :area='area'/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Dashboard from './components/Dashboard.vue'

// https://covid.saude.gov.br/
// https://github.com/CSSEGISandData/COVID-19
export default {
  name: 'App',
  components: {
    NavBar,
    Dashboard
  },
  data() {
    return{
      area: 'global'
    }
  },
  methods: {
    changeArea(area){
      this.area = area
    }
  }
}
</script>

<style>

</style>
