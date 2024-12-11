import {describe, it, expect, vi} from 'vitest'

import {mount} from '@vue/test-utils'
import ToDoList from '../ToDoList.vue'
import {createTestingPinia} from '@pinia/testing'
import {useTasksStore} from "../../stores/tasks";

describe('TodoList', () => {
  it('shows a list of todos', () => {
    const wrapper = mount(ToDoList, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              taskStore: { tasks: [{"id": 123, "title": "Learning Vue"}]}
            },
          }),
        ],
      },
    });

    const tasksStore = useTasksStore();

    expect(tasksStore.tasks).toEqual([{"id": 123, "title": "Learning Vue"}])
  });
});
