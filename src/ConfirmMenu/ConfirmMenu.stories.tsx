import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'

import TextInput from '../TextInput/TextInput'

import ConfirmMenu from './ConfirmMenu'

export default {
  title: 'Actions/ConfirmMenu',
  decorators: [withKnobs],
}

export const Basic = () => (
  <ConfirmMenu>
    <TextInput />
  </ConfirmMenu>
)
