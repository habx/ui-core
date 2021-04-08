import * as React from 'react'
import styled from 'styled-components'

import { withGrid } from '../_storybook/withGrid'
import { Card } from '../Card'
import { Icon } from '../Icon'
import { useCurrentBackground } from '../useCurrentBackground'

import { FloatingButton, FloatingButtonProps } from './index'

const Container = styled(Card)`
  width: 300px;
  height: 200px;
`

const WrappedFloatingButton = (props: FloatingButtonProps) => {
  const background = useCurrentBackground()

  return (
    <Container backgroundColor={background}>
      <FloatingButton {...props} />
    </Container>
  )
}

const GRID_PROPS = {
  children: 'Liste',
}

const GRID_LINES = [
  {
    title: 'Regular',
  },
  {
    title: 'Small',
    props: { small: true },
  },
  {
    title: 'Position top',
    props: { position: 'top' as 'top' },
  },
]

const GRID_ITEMS = [
  {},
  {
    props: { disabled: true },
  },
  {
    props: {
      elementLeft: <Icon icon="list" />,
    },
  },
  {
    props: {
      elementRight: <Icon icon="list" />,
    },
  },
  {
    props: {
      error: true,
      children: 'Supprimer',
    },
  },
]

const Grid = withGrid<FloatingButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedFloatingButton)

export default {
  title: 'Actions/FloatingButton',
  component: FloatingButton,
}

export const basic = (props: FloatingButtonProps) => (
  <WrappedFloatingButton {...props}>Liste</WrappedFloatingButton>
)

export const gallery = () => <Grid />

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
    },
  },
}
