import { Meta, StoryObj } from '@storybook/angular';
import PlusButton from './plus-button.component';

const meta: Meta<PlusButton> = {
  title: 'Plus Button',
  component: PlusButton
}

export default meta;
type Story = StoryObj<PlusButton>;

export const Default: Story = {
  args: {
    disabled: false
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
