import { RadioGroup, RadioGroupItem } from "./radio-group";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="o1" />
        <label htmlFor="o1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="o2" />
        <label htmlFor="o2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="o3" />
        <label htmlFor="o3">Option 3</label>
      </div>
    </RadioGroup>
  ),
};
