import * as React from 'react'

import { withGrid } from '../_storybook/withGrid'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { MenuLine } from '../MenuLine'
import { MenuSection } from '../MenuSection'

import { Menu, MenuProps } from './index'

const GRID_PROPS = {
  triggerElement: <Button outline>Open</Button>,
  children: (
    <React.Fragment>
      <MenuSection>
        <MenuLine error>Modifier</MenuLine>
        <MenuLine>Relancer</MenuLine>
        <MenuLine active>Déplacer</MenuLine>
      </MenuSection>
      <MenuSection>
        <MenuLine elementRight={<Icon icon="chevron-east" />}>Étage 1</MenuLine>
        <MenuLine elementRight={<Icon icon="chevron-east" />}>Étage 2</MenuLine>
      </MenuSection>
      <MenuLine elementLeft={<Icon icon="settings-2" />}>Settings</MenuLine>
    </React.Fragment>
  ),
}

const GRID_LINES = [
  { title: 'Position vertical' },
  {
    title: 'Position horizontal',
    props: { position: 'horizontal' as 'horizontal' },
  },
]

const GRID_ITEMS = [
  { label: 'Basic' },
  { label: 'Full screen on mobile', props: { fullScreenOnMobile: true } },
]

const Grid = withGrid<MenuProps>({
  props: GRID_PROPS,
  lines: GRID_LINES,
  items: GRID_ITEMS,
})(Menu)

export default {
  title: 'Actions/Menu',
  component: Menu,
  subcomponents: { MenuLine, MenuSection },
}

export const basic = (props: MenuProps) => (
  <Menu triggerElement={<Button outline>Click me</Button>} {...props} />
)

basic.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=827%3A957',
    },
  },
}

export const gallery = () => <Grid />

export const lightBackground = () => <Grid background="light" />

export const darkBackground = () => <Grid background="dark" />
