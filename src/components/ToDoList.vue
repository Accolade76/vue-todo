<script>
import { useTasksStore } from '@/stores/tasks.ts'
import { storeToRefs } from 'pinia'

export default {
  name: 'ToDoList',
  setup() {
    const tasksStore = useTasksStore()
    const { tasks } = storeToRefs(tasksStore)
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
