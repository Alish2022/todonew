import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'ToDoList/AddItemForm',
    component: AddItemForm,
} as ComponentMeta<typeof AddItemForm>;

const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormStory = Template.bind({});

AddItemFormStory.args = {
    addItem: action('item add')
};

