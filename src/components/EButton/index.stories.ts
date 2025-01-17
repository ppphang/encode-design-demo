import EButton from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/EButton",
  component: EButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"], // 保留这一行
  args: { onClick: fn() },
} satisfies Meta<typeof EButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Button",
  },
};
