import TaskCounter from './TaskCounter.vue'
import { expect, within } from '@storybook/test'

export default {
  component: TaskCounter,
  title: 'Count Tasks',
  tags: ['autodocs']
}

export const Default = {};
export const NoTasks = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const taskCounter = canvas.getByTestId('task-counter');

    await expect(taskCounter).toHaveTextContent('0');
  }
};