<template>
  <div class="card">
    <div class="container">
      <p>{{ title }}</p> 
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 8px;
  border: 1px solid rgba(219, 233, 245, 0.8);
  border-radius: 8px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
  border-bottom: 1px solid rgba(219,233,245,0.8);;
}
</style>