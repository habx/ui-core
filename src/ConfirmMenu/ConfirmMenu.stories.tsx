import { withKnobs } from '@storybook/addon-knobs'
import * as React from 'react'

import TextInput from '../TextInput/TextInput'

import ConfirmMenu from './ConfirmMenu'

export default {
  title: 'Actions/ConfirmMenu',
  decorators: [withKnobs],
}

const InputWithConfirm = () => {
  const ref = React.useRef<HTMLInputElement>(null)
  return (
    <ConfirmMenu triggerRef={ref}>
      <TextInput ref={ref} />
    </ConfirmMenu>
  )
}

export const Basic = () => <InputWithConfirm />
