import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import {
  ArrowLeft,
  ArrowRight,
  Linkedin,
  ShoppingCart,
} from "lucide-react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Load more",
  },
};

export const Search: Story = {
  args: {
    variant: "search",
    children: "Search",
  },
};
export const TapInactive: Story = {
  args: {
    variant: "tapInactive",
    children: <ShoppingCart size={15}/>,
  },
};
export const TapActive: Story = {
  args: {
    variant: "tapActive",
    children: <ShoppingCart size={15}/>,
  },
};
export const Action: Story = {
  args: {
    variant: "action",
    children:
      <>
        <p>Add to cart</p>
        <ShoppingCart size={15}/>
      </>
    ,
  },
};
export const Social: Story = {
  args: {
    variant: "social",
    children: <Linkedin />,
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
    children: <ArrowRight />,
  },
};

export const IconsInactive: Story = {
  args: {
    variant: "iconInactive",
    children: <ArrowLeft />,
  },
};


