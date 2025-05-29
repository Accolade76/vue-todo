<script lang="ts">

import { ref } from 'vue'

export default {
  name: 'AddTask',
  data() {
    return {
      inputText: ""
    }
  }
};

</script>

<template>
  <div>
    <input data-testid="task-title" v-model="inputText"/>
    <button data-testid="add-task" :disabled="!inputText">Add</button>
  </div>
</template>

<style scoped>

</style>