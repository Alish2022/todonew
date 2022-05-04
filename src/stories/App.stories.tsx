import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Provider} from "react-redux";
import App from "../App";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
    title: 'ToDoList/App',
    component: App,
    decorators:[ReduxStoreProviderDecorator]
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) =><App/>;

export const AppStory = Template.bind({});


