<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import { storeToRefs } from 'pinia'

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)
</script>

<template>
  <div data-test="todos">
    <ul>
      <li v-for="task in tasks" :key="task.id" data-test="todo">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>
