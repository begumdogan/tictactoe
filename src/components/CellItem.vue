<template>
  <div @click="$emit('click')" class="cell">
    <span v-if="value !=='' ">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ['value']
  
}
</script>

<style scoped>
.cell {
  width: 80px;
  height: 80px;
  border: 1px solid rgb(255,105,0);
  font-size: 45px;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
