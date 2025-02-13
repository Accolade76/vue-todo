import ToDoList from '@/components/ToDoList.vue'

export default {
  component: ToDoList,
  title: 'To Do List',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: { }
};

export const Default =
{
}