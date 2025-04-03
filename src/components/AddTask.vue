<script lang="ts">

import { ref } from 'vue'

export default {
  name: 'AddTask',
  props: {},
  setup() {
   const buttonDisabled = ref(true)
   const onChange = (event: Event) => {
      buttonDisabled.value = false
    }

   return {
     buttonDisabled,
     onChange,
   }
  },
};

</script>

<template>
  <div><input data-testid="task-title" @change="onChange($event)"/><button data-testid="add-task" :disabled=buttonDisabled>Add</button></div>
</template>

<style scoped>

</style>