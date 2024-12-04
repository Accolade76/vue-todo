<script>
import { ref } from 'vue'

export default {
  name: 'ToDoList',
  setup() {
    const tasks = ref([{ id:1 , title:'Task 1'},{ id:3 , title:'Task 3'}])
    return { tasks }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title}}
      </li>
    </ul>
  </div>
</template>
