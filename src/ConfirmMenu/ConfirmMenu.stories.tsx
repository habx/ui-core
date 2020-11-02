import * as React from 'react'

import { TextInput } from '../TextInput'

import { ConfirmMenu, ConfirmMenuProps } from './index'

export default {
  title: 'Actions/ConfirmMenu',
  component: ConfirmMenu,
}

export const basic = (props: ConfirmMenuProps) => (
  <ConfirmMenu {...props}>
    <TextInput placeholder="This is a regular TextInput" />
  </ConfirmMenu>
)
