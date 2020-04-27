import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'

import withGrid from '../_internal/StorybookGrid'

import CardButton from './CardButton'
import CardProps from './CardButton.interface'

const GRID_LINES = [
  {
    title: 'Default',
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
]

const Grid = withGrid<CardProps>({
  props: {
    title: 'Rocket launcher',
    description: 'Accédez au résumé de vos choix, recevez le par mail',
    illustration:
      '//res.cloudinary.com/habx/image/upload/illustrations/habxmojies/rocket.svg',
  },
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(CardButton)

export default {
  title: 'Actions/CardButton',
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

export const dynamic = () => (
  <CardButton
    title="Rocket launcher"
    description="Accédez au résumé de vos choix, recevez le par mail"
    illustration="//res.cloudinary.com/habx/image/upload/illustrations/habxmojies/rocket.svg"
  />
)

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=4%3A0',
    },
  },
}
