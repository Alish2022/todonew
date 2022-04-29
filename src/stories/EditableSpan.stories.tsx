import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "../EditableSpan";

export default {
    title: 'ToDoList/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: "value EditableSpan changed"
        },
        value: {
            defaultValue: 'Html',
            description: "start value EditableSpan"
        }
    }
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanStory = Template.bind({});

EditableSpanStory.args = {
    onChange: action("value EditableSpan changed")
};

