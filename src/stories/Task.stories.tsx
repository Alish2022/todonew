import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {TaskType} from "../Todolist1";

export default {
    title: 'ToDoList/Task',
    component: Task,
    argTypes: {
        taskId: {
            description: "task Id"
        },
        todolistId:{
            description: "todolist Id"
        },
        isDone:{
            description: "is Done"
        },
        title:{
            description: "title"
        }
    },
    decorators:[ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Task>;

const TaskWithRedux=()=>{
    let task=useSelector<AppRootStateType,TaskType>(state=>state.tasks["todolistId1"][0])
    return <Task
        taskId={task.id}
        todolistId="todolistId1"
        isDone={task.isDone}
        title={task.title}/>
}

const Template: ComponentStory<typeof TaskWithRedux> = (args) => <TaskWithRedux/>;

export const TaskWithReduxStory = Template.bind({});


