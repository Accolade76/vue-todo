<script>
import { ref } from 'vue'

export default {
  name: 'ToDoList',
  setup() {
    const tasks = ref(['Task 1', 'Task 2'])
    return { tasks }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="task in tasks">
        {{ task }}
      </li>
    </ul>
  </div>
</template>
