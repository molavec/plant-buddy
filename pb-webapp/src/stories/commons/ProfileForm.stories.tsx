import type { Meta, StoryObj } from '@storybook/react'

import ProfileForm  from '../../components/ProfileForm'

// More on how to set up stories at: 
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProfileForm> = {
  title: 'Commons/ProfileForm',
  component: ProfileForm,
  tags: ['plant-buddy-component'],
}

export default meta
type Story = StoryObj<typeof ProfileForm>

// More on writing stories with args: 
// https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    nickname: 'WeedLover',
    email: 'weed@lover.com',
    name: '',
    avatarImage: '',
    headerImage: '',
  },
}