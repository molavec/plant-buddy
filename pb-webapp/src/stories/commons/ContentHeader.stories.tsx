import type { Meta, StoryObj } from '@storybook/react'

import ContentHeader  from '../../components/ContentHeader'

// More on how to set up stories at: 
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ContentHeader> = {
  title: 'Commons/ContentHeader',
  component: ContentHeader,
  tags: ['plant-buddy-component'],
}

export default meta
type Story = StoryObj<typeof ContentHeader>

// More on writing stories with args: 
// https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => <ContentHeader> Título de sección  </ContentHeader>,
}

