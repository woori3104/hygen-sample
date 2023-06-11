---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { <%= component_name %> } from "./";

type T = typeof <%= component_name %>;
type Story = ComponentStoryObj<T>;


export default {
  component: <%= component_name %>
} as ComponentMeta<T>;

export const Default: Story = {};
