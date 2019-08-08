import { storiesOf } from '@storybook/react'
import * as React from 'react'

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
          <MenuLine iconLeft={<Icon icon="pin" />}>Menu Item one</MenuLine>
          <MenuLine iconLeft={<Icon icon="pin" />}>Menu Item two</MenuLine>
          <MenuSection title="Sub section" titleIconLeft={<Icon icon="pin" />}>
            <MenuLine>Sub menu one</MenuLine>
            <MenuLine>Sub menu two</MenuLine>
            <MenuLine>Sub menu three</MenuLine>
            <MenuLine>Sub menu foor</MenuLine>
          </MenuSection>
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

storiesOf('Actions|Menu', module).add('galery', () => <Grid />)
