import type { Meta, StoryObj } from '@storybook/react'

import PlantBuddyLogo  from '../../components/PlantBuddyLogo'

// More on how to set up stories at: 
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PlantBuddyLogo> = {
  title: 'Commons/PlantBuddyLogo',
  component: PlantBuddyLogo,
  tags: ['plant-buddy-component'],
  //👇 Creates specific argTypes
  argTypes: {
    height: { control: 'number' },
    width: { control: 'number' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    height: 100,
    width: 100,
  },
}

export default meta
type Story = StoryObj<typeof PlantBuddyLogo>

export const Primary: Story = {
  render: () => <PlantBuddyLogo /> ,
}

export const Height: Story = {
  render: () => <PlantBuddyLogo height={100} />,
}

export const Width: Story = {
  render: () => <PlantBuddyLogo width={100} />,
}


export const Custom: Story = {
  args: {
    height: 100,
    width: 100,
  },
}
