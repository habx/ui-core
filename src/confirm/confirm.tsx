import * as React from 'react'

import { isString } from '../_internal/data'
import { ActionBar } from '../ActionBar'
import { Button } from '../Button'
import { prompt } from '../prompt'
import { ProviderContext } from '../Provider'

import { ConfirmFormContainer } from './confirm.style'

type ConfirmConfig = {
  message: string
  confirmLabel?: string
  cancelLabel?: string
}

export const confirm = (config: ConfirmConfig | string) => {
  const innerConfig: ConfirmConfig = isString(config)
    ? { message: config }
    : config

  return prompt(({ onResolve }) => ({
    title: innerConfig.message,
    Component: () => {
      const context = React.useContext(ProviderContext)

      return (
        <ConfirmFormContainer>
          <ActionBar>
            <Button error link onClick={() => onResolve(false)}>
              {innerConfig.cancelLabel ?? context.cancelLabel}
            </Button>
            <Button onClick={() => onResolve(true)}>
              {innerConfig.confirmLabel ?? context.confirmLabel}
            </Button>
          </ActionBar>
        </ConfirmFormContainer>
      )
    },
    onClose: () => onResolve(false),
  }))
}
