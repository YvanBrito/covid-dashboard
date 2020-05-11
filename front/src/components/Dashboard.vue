<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-flex lg3 sm6 xs12>
      <v-card 
        color="#385F73"
        dark>
        <v-card-text>
          <div class="d-flex justify-space-between">
            <div>
              <p class="display-1 text--primary">
                168953
              </p>
              <div class="text--primary">
                Casos confirmados
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex lg3 sm6 xs12>
      <v-card 
        color="#385F73"
        dark>
        <v-card-text>
          <div class="d-flex justify-space-between">
            <div>
              <p class="display-1 text--primary">
                168953
              </p>
              <div class="text--primary">
                Casos confirmados
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex lg3 sm6 xs12>
      <v-card 
        color="#385F73"
        dark>
        <v-card-text>
          <div class="d-flex justify-space-between">
            <div>
              <p class="display-1 text--primary">
                168953
              </p>
              <div class="text--primary">
                Casos confirmados
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex lg3 sm6 xs12>
      <v-card 
        color="#385F73"
        dark>
        <v-card-text>
          <div class="d-flex justify-space-between">
            <div>
              <p class="display-1 text--primary">
                168953
              </p>
              <div class="text--primary">
                Casos confirmados
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex lg6 sm12 xs12>
      <Card
        :title="'Número de Casos'">
        <LineChart
            :name='"mortespordia1"'
            :dataPath='area'
            :heightInitial='300'/>
      </Card>
    </v-flex>
    <v-flex lg6 sm12 xs12>
      <Card
        :title="'Número de Casos'">
        <BarChart
            :name='"mortespordia2"'
            :dataPath='area'
            :heightInitial='300'/>
      </Card>
    </v-flex>
    <v-row>
      <v-col>
        <Card
          :title="'Número de Casos'">
        </Card>
      </v-col>
      <v-col>
        <Card
          :title="'Nº de casos por região'">
        </Card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Card :title="'Nº de casos por região'">
        </Card>
      </v-col>
      <v-col>
        <Card :title="'Nº de casos por região'">
        </Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Panel from './Panel'
import Card from './Card'
import LineChart from './Charts/LineChart'
// import PieChart from './Charts/PieChart'
import BarChart from './Charts/BarChart'
// import MapaMundi from './Charts/MapaMundi'


export default {
  components: {
    // Panel,
    Card,
    LineChart,
    // PieChart,
    BarChart,
    // MapaMundi
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
  border: 1px solid rgba(98, 182, 255, 0.8);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 70px;
  width: 90%;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}
</style>