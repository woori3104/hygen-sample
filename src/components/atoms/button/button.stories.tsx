import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { button } from "./";

type T = typeof button;
type Story = ComponentStoryObj<T>;


export default {
  component: button
} as ComponentMeta<T>;

export const Default: Story = {};
