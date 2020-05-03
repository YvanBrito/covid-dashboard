<template>
  <div class="panel">
    <Card title='Confirmados'>
      19.490
    </Card>
    <Card title='Óbitos'>
      5.239
    </Card>
    <Card title='Letalidade'>
      6,5%
    </Card>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'Panel',
  components: {
    Card
  },
  data() {
    return {
      confirmed: 0,
      deaths: 0,
      letality: 0
    }
  }
}
</script>

<style>
.panel {
    border: 1px solid rgba(59, 230, 158, 0.8);
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
}
</style>