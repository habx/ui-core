import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Button from '../Button'
import Icon from '../Icon'
import MenuLine from '../MenuLine'

import Menu from './Menu'

storiesOf('Actions|Menu', module).add('galery', () => (
  <Menu triggerElement={<Button outline>Open</Button>}>
    <MenuLine iconLeft={<Icon icon="pin" />}>English</MenuLine>
    <MenuLine iconLeft={<Icon icon="pin" />}>Deutsch</MenuLine>
    <MenuLine active iconLeft={<Icon icon="pin" />}>
      Français
    </MenuLine>
  </Menu>
))
