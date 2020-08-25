import * as React from 'react'

import TextInput from '../TextInput'

import ConfirmMenu from './index'

export default {
  title: 'Actions/ConfirmMenu',
  component: ConfirmMenu,
}

export const basic = () => (
  <ConfirmMenu>
    <TextInput />
  </ConfirmMenu>
)

export const withLabels = () => (
  <ConfirmMenu textual>
    <TextInput />
  </ConfirmMenu>
)
