import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'

import {
  CardButtonWithIllustration,
  CardButtonWithIllustrationProps,
} from './index'

const Container = styled.div`
  height: 180px;
  width: 376px;
`

const GRID_PROPS = {
  title: 'Rocket launcher',
  description: 'Accédez au résumé de vos choix, recevez le par mail',
  illustration:
    '//res.cloudinary.com/habx/image/upload/v1611596609/illustrations/concept/crank.svg',
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

const Grid = withGrid<CardButtonWithIllustrationProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
  itemWrapper: Container,
})(CardButtonWithIllustration)

export default {
  title: 'Actions/CardButtonWithIllustration',
  component: CardButtonWithIllustration,
  argTypes: {
    title: {
      defaultValue: 'Rocket launcher',
    },
    description: {
      defaultValue: 'Accédez au résumé de vos choix, recevez le par mail',
    },
    illustration: {
      defaultValue:
        '//res.cloudinary.com/habx/image/upload/v1611596609/illustrations/concept/crank.svg',
    },
  },
}

export const basic = (props: CardButtonWithIllustrationProps) => (
  <CardButtonWithIllustration {...props} />
)

basic.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=4%3A0',
  },
}

export const gallery = () => <Grid />
