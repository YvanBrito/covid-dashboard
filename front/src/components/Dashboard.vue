<template>
  <div class="dashboard">
    <Panel/>
    <Card
        title="Mortes por dia">
      <BarChart
        :name='"mortespordia1"'
        :width='600'
        :height='300'/>
    </Card>
    <Card
        title="Casos novos por data de confirmação">
      <LineChart
        :name='"mortespordia2"'
        :width='600'
        :height='300'/>
    </Card>
    <Card
        title="Nº de casos por região">
      <PieChart
        :name='"mortespordia3"'
        :width='600'
        :height='300'/>
    </Card>
  </div>
</template>

<script>
import Panel from './Panel'
import Card from './Card'
import BarChart from './Charts/BarChart'
import LineChart from './Charts/LineChart'
import PieChart from './Charts/PieChart'

export default {
  data() {
    return {
      area: 'global'
    }
  },
  computed: {
    dataPath() {
      if (this.area === 'global'){
        return 'pronto'
      }
      return 'não tá pronto'
    }
  },
  components: {
    Panel,
    Card,
    BarChart,
    LineChart,
    PieChart
  }
}
</script>

<style>
.dashboard {
  border: 3px solid red;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 70px;
  width: 60%;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}
</style>