import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([{ id:1 , title:'Task 1'},{ id:3 , title:'Task 3'}])
  return { tasks }
})