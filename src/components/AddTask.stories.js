import AddTask from './AddTask.vue'
import { userEvent, expect, within } from '@storybook/test'

export default {
  component: AddTask,
  title: 'Add Task',
  tags: ['autodocs'],
};

export const Default = {};

export const WithInteractions = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByTestId('task-title');
    const button = canvas.getByTestId('add-task');

    await expect(button).toBeDisabled();

    await userEvent.type(input, 'Task 1');

    await expect(button).not.toBeDisabled();
  }
};