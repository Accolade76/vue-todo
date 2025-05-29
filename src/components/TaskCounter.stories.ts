import TaskCounter from './TaskCounter.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { expect, within } from '@storybook/test'

export default {
  component: TaskCounter,
  title: 'Count Tasks',
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TaskCounter>;

export const Default: Story = {};
export const NoTasks: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const taskCounter = canvas.getByTestId('task-counter');

    await expect(taskCounter).toHaveTextContent('0');
  }
};