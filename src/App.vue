<template>
  <boardItem />
</template>

<script>
import boardItem from './components/BoardItem.vue'

export default {
  name: 'App',
  components: {
    boardItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
