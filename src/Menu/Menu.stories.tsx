import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { config } from 'storybook-addon-designs'

import withGrid from '../_internal/StorybookGrid'
import Button from '../Button'
import Icon from '../Icon'
import MenuLine from '../MenuLine'
import MenuSection from '../MenuSection'

import Menu from './Menu'
import MenuProps from './Menu.interface'

const GRID_PROPS = {
  triggerElement: <Button outline>Open</Button>,
  children: (
    <React.Fragment>
      <MenuLine elementLeft={<Icon icon="arrow-west" />}>
        Page d'accueil
      </MenuLine>
      <MenuLine elementLeft={<Icon icon="person" />}>Mon profil</MenuLine>
      <MenuSection
        title="Mes projets"
        titleIconLeft={<Icon icon="house-heart-outline" />}
      >
        <MenuLine>Paris Venelles</MenuLine>
        <MenuLine>Résidence Aurore</MenuLine>
        <MenuLine>Le Perchoir</MenuLine>
      </MenuSection>
      <MenuLine elementLeft={<Icon icon="close" />}>Me déconnecter</MenuLine>
    </React.Fragment>
  ),
}

const GRID_LINES = [
  { title: 'Basic' },
  { title: 'Full screen on mobile', props: { fullScreenOnMobile: true } },
]

const GRID_ITEMS = [
  {
    label: 'Position top left',
    props: {
      position: 'top-left' as 'top-left',
    },
  },
  {
    label: 'Position top right',
    props: {
      position: 'top-right' as 'top-right',
    },
  },
  {
    label: 'Position bottom left',
    props: {
      position: 'bottom-left' as 'bottom-left',
    },
  },
  {
    label: 'Position bottom right',
    props: {
      position: 'bottom-right' as 'bottom-right',
    },
  },
  {
    label: 'Position left top',
    props: {
      position: 'left-top' as 'left-top',
    },
  },
  {
    label: 'Position right top',
    props: {
      position: 'right-top' as 'right-top',
    },
  },
]

const Grid = withGrid<MenuProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Menu)

storiesOf('Actions|Menu', module).add('galery', () => <Grid />, {
  design: config({
    type: 'figma',
    url:
      'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=827%3A957',
  }),
})
