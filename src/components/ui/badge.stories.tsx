import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Sale 50%",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "64% Off",
  },
};

export const Detail: Story = {
  args: {
    variant: "detail",
    children: "In Stock",
  },
};