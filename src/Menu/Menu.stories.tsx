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
}

const GRID_LINES = [{ title: 'Basic' }]

const GRID_ITEMS = [
  {
    props: {
      children: (
        <React.Fragment>
          <MenuLine iconLeft={<Icon icon="arrow-west" />}>
            Page d'accueil
          </MenuLine>
          <MenuLine iconLeft={<Icon icon="person" />}>Mon profil</MenuLine>
          <MenuSection
            title="Mes projets"
            titleIconLeft={<Icon icon="house-heart-outline" />}
          >
            <MenuLine>Paris Venelles</MenuLine>
            <MenuLine>Résidence Aurore</MenuLine>
            <MenuLine>Le Perchoir</MenuLine>
          </MenuSection>
          <MenuLine iconLeft={<Icon icon="close" />}>Me déconnecter</MenuLine>
        </React.Fragment>
      ),
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
