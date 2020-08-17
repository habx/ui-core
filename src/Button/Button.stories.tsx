import * as React from 'react'

import StorybookCenterItemContainer from '../_internal/StorybookCenterItem.style'
import withGrid from '../_internal/StorybookGrid'
import Icon from '../Icon'

import Button from './Button'
import ButtonProps from './Button.interface'

const GRID_PROPS = {
  children: 'Voir tous nos projets',
}

const GRID_LINES = [
  {
    title: 'Solid + Regular',
  },
  {
    title: 'Solid + Small',
    props: { small: true },
  },
  {
    title: 'Solid + Large',
    props: { large: true },
  },
  {
    title: 'Outline + Regular',
    props: { outline: true },
  },
  {
    title: 'Outline + Small',
    props: { outline: true, small: true },
  },
  {
    title: 'Outline + Large',
    props: { outline: true, large: true },
  },
  {
    title: 'Link + Regular',
    props: { link: true },
  },
  {
    title: 'Link + Small',
    props: { link: true, small: true },
  },
  {
    title: 'Link + Large',
    props: { link: true, large: true },
  },
]

const GRID_ITEMS = [
  {},
  {
    props: { disabled: true },
  },
  {
    props: {
      elementLeft: <Icon icon="arrow-east" />,
    },
  },
  {
    props: {
      elementRight: <Icon icon="arrow-east" />,
    },
  },
  {
    props: {
      warning: true,
      children: 'Supprimer',
    },
  },
  {
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

export const Default = ({ ...props }) => (
  <StorybookCenterItemContainer>
    <Button {...props}>Voir tous nos projets</Button>
  </StorybookCenterItemContainer>
)

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=18%3A1250',
    },
  },
}
