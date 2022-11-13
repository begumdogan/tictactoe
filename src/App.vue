<template>
<p> Dark theme: {{isDark}}</p>
<button @click="toggleDark()">
    Toggle Color Mode
  </button>
  <boardItem />

</template>

<script>
import boardItem from './components/BoardItem.vue'
import { useDark, useToggle} from "@vueuse/core";

export default {
  name: 'App',
  setup(){
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    return{
    isDark,
    toggleDark
   }
  },
  components: {
    boardItem
  },
  
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

.dark {
  background: #16171d; 
  color: #fff;
}
</style>
