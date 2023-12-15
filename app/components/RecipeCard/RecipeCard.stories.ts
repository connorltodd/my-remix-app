import type { Meta, StoryObj } from '@storybook/react';
import RecipeCard from "./RecipeCard";

const meta = {
    title: 'Example/RecipeCard',
    component: RecipeCard,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof RecipeCard>;
  

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'RecipeCard',
  },
};
