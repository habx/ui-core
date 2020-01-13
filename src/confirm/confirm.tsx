import * as React from 'react'

import Button from '../Button'
import prompt from '../prompt'

import { ConfirmFormContainer, ConfirmFormActions } from './confirm.style'

type ConfirmConfig = {
  message: string
  confirmLabel?: string
  cancelLabel?: string
}

const confirm = (config: ConfirmConfig) =>
  prompt(({ onResolve }) => ({
    title: config.message,
    children: () => (
      <ConfirmFormContainer>
        <ConfirmFormActions>
          <Button warning onClick={() => onResolve(false)}>
            {config.cancelLabel}
          </Button>
          <Button onClick={() => onResolve(true)}>{config.confirmLabel}</Button>
        </ConfirmFormActions>
      </ConfirmFormContainer>
    ),
    onClose: () => onResolve(false),
  }))

export default confirm
