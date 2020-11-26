import * as React from 'react'

import { CenteredComponent } from '../_storybook/CenteredComponent'
import { withGrid } from '../_storybook/withGrid'
import { Icon } from '../Icon'

import { Button, ButtonProps } from './index'

const GRID_PROPS = {
  children: 'Voir tous nos projets',
}

const GRID_LINES = [
  {
    title: 'Solid',
  },
  {
    title: 'Outline',
    props: { outline: true },
  },
  {
    title: 'Ghost',
    props: { ghost: true },
  },
  {
    title: 'Link',
    props: { link: true },
  },
  {
    title: 'Solid (secondary)',
    props: { secondary: true },
  },
  {
    title: 'Ghost (secondary)',
    props: { ghost: true, secondary: true },
  },
  {
    title: 'Link (secondary)',
    props: { link: true, secondary: true },
  },
  {
    title: 'Solid (error)',
    props: { error: true },
  },
  {
    title: 'Solid (small)',
    props: { small: true },
  },
  {
    title: 'Outline (small)',
    props: { outline: true, small: true },
  },
  {
    title: 'Ghost (small)',
    props: { ghost: true, small: true },
  },
  {
    title: 'Link (small)',
    props: { link: true, small: true },
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
  {
    label: 'Element left',
    props: {
      elementLeft: <Icon icon="magicstick-outline" />,
    },
  },
  {
    label: 'Element right',
    props: {
      elementRight: <Icon icon="magicstick-outline" />,
    },
  },
  {
    label: 'Loading',
    props: { loading: true },
  },
]

const Grid = withGrid<ButtonProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Button)

export default {
  title: 'Actions/Button',
  component: Button,
}

export const basic = ({ ...props }) => (
  <CenteredComponent>
    <Button {...props}>Voir tous nos projets</Button>
  </CenteredComponent>
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
