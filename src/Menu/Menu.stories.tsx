import { withKnobs } from '@storybook/addon-knobs'
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
  children: (
    <React.Fragment>
      <MenuLine elementLeft={<Icon icon="arrow-west" />}>Back</MenuLine>
      <MenuSection>
        <MenuLine>Feature 1</MenuLine>
        <MenuLine active>Feature 2 (active)</MenuLine>
        <MenuLine disabled>Feature 3 (disabled)</MenuLine>
      </MenuSection>
      <MenuLine elementLeft={<Icon icon="close" />}>Me déconnecter</MenuLine>
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
  decorators: [withKnobs],
}

export const gallery = () => <Grid />

gallery.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/LfGEUbovutcTpygwzrfTYbl5/Desktop-components?node-id=827%3A957',
    },
  },
}
