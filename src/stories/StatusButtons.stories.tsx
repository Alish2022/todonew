import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import StatusButtons from "../StatusButtons";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
    title: 'ToDoList/StatusButtons',
    component: StatusButtons,
    argTypes: {
        todolistId: {
            description: "todolistId",
            defaultValue:"todolistId1"
        }
    },
    decorators:[ReduxStoreProviderDecorator]
} as ComponentMeta<typeof StatusButtons>;

const Template: ComponentStory<typeof StatusButtons> = (args) => <StatusButtons {...args} />;

export const StatusButtonsStory = Template.bind({});



