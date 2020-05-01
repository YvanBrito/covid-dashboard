<template>
  <div class="menu">
    <ul>
      <li><a class="active" href="#home">Mundo</a></li>
      <li><a href="#news">Brasil</a></li>
      <li><a href="#contact">Pará</a></li>
      <li><a href="#about">Sobre</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.menu {
  position: fixed;
  background-color: #fff;
  width: 100%;
  top: 0;
  left: 0px;
  margin: 0;
  padding: 0;
  z-index: 1;
  border: 1px solid rgba(219, 233, 245, 0.8);
}

ul {
  list-style-type: none;
  margin: 0 0 0 20%;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: #555;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>