import * as React from 'react'
import styled from 'styled-components'

import withGrid from '../_storybook/withGrid'
import Card from '../Card'

import FloatingIconButton, { FloatingIconButtonProps } from './index'

const Container = styled(Card)`
  width: 300px;
  height: 200px;
`

const WrappedFloatingIconButton: React.FunctionComponent<FloatingIconButtonProps> = (
  props
) => (
  <Container>
    <FloatingIconButton {...props} />
  </Container>
)

const GRID_PROPS = {
  icon: 'list',
}

const GRID_LINES = [
  {
    title: 'Position bottom right (default)',
    props: { position: 'bottom-right' as 'bottom-right' },
  },
  {
    title: 'Position bottom left',
    props: { position: 'bottom-left' as 'bottom-left' },
  },
  {
    title: 'Position top left',
    props: { position: 'top-left' as 'top-left' },
  },
  {
    title: 'Position top right',
    props: { position: 'top-right' as 'top-right' },
  },
]

const GRID_ITEMS = [
  {
    label: 'Default',
  },
  {
    label: 'Disabled',
    props: { disabled: true },
  },
  {
    label: 'Warning',
    props: {
      warning: true,
    },
  },
  {
    label: 'Small',
    props: {
      small: true,
    },
  },
]

const Grid = withGrid<FloatingIconButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(WrappedFloatingIconButton)

export default {
  title: 'Actions/FloatingIconButton',
  component: FloatingIconButton,
  argTypes: {
    icon: {
      defaultValue: 'list',
    },
  },
}

export const basic = (props: FloatingIconButtonProps) => (
  <WrappedFloatingIconButton {...props} />
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
    },
  },
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
