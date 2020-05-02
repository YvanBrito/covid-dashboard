<template>
  <div class="dashboard">
    <Panel/>
    <Card
        title="Casos novos por data de confirmação">
      <LineChart
        :name='"mortespordia1"'
        :dataPath='area'
        :width='600'
        :height='300'/>
    </Card>
    <Card
        v-if='area!=="brasil"'
        title="Mortes por dia">
      <BarChart
        :name='"mortespordia2"'
        :dataPath='area'
        :width='600'
        :height='300'/>
    </Card>
    <Card
        v-if='area==="brasil"'
        title="Nº de casos por região">
      <PieChart
        :name='"mortespordia3"'
        :dataPath='area'
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
  components: {
    Panel,
    Card,
    BarChart,
    LineChart,
    PieChart
  },
  props: {
    area: {
      type: String,
      required: true
    }
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