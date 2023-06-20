import type { Meta, StoryObj } from '@storybook/react'

import CardContainer  from '../../components/CardContainer'

// More on how to set up stories at: 
// https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CardContainer> = {
  title: 'Commons/CardContainer',
  component: CardContainer,
  tags: ['plant-buddy-component'],
}

export default meta
type Story = StoryObj<typeof CardContainer>

// More on writing stories with args: 
// https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => <CardContainer> Hola Mundo </CardContainer>,
}