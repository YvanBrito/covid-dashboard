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
  components: {
    Card
  }
}
</script>

<style>
.panel {
    border: 3px solid green;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
}
</style>