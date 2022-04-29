import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Task} from "../Task";

export default {
    title: 'ToDoList/Task',
    component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
TaskIsDoneStory.args = {
    taskId: '1',
    todolistId: '1',
    isDone: true,
    title: 'js'
};

export const TaskIsNotDoneStory = Template.bind({});
TaskIsDoneStory.args = {
    taskId: '1',
    todolistId: '1',
    isDone: false,
    title: 'js'
};
