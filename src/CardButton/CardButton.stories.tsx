import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import { CardButton, CardButtonProps } from './index'

const Container = styled.div`
  height: 180px;
  width: 376px;
`

const GRID_PROPS = {
  title: 'Rocket launcher',
  description: 'Accédez au résumé de vos choix, recevez le par mail',
  illustration:
    '//res.cloudinary.com/habx/image/upload/illustrations/habxmojies/rocket.svg',
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Outline',
    props: { outline: true },
  },
]

const GRID_ITEMS = [
  {
    label: 'Normal',
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
]

const Grid = withGrid<CardButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: Container,
})(CardButton)

export default {
  title: 'Actions/CardButton',
  component: CardButton,
  argTypes: {
    title: {
      defaultValue: 'Rocket launcher',
    },
    description: {
      defaultValue: 'Accédez au résumé de vos choix, recevez le par mail',
    },
    illustration: {
      defaultValue:
        '//res.cloudinary.com/habx/image/upload/illustrations/habxmojies/rocket.svg',
    },
  },
}

export const basic = (props: CardButtonProps) => <CardButton {...props} />

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=4%3A0',
    },
  },
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
