import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "button",
  },
};

export const Search: Story = {
  args: {
    variant: "search",
    children: "button",
  },
};
export const TapInactive: Story = {
  args: {
    variant: "tapInactive",
    children: "button",
  },
};
export const TapActive: Story = {
  args: {
    variant: "tapActive",
    children: "button",
  },
};
export const Action: Story = {
  args: {
    variant: "action",
    children: "button",
  },
};
export const Social: Story = {
  args: {
    variant: "social",
    children: "button",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "button",
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    children: "button",
  },
};

export const IconsInactive: Story = {
  args: {
    variant: "iconInactive",
    children: "button",
  },
};


