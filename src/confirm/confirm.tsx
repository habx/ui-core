import * as React from 'react'

import { isString } from '../_internal/data'
import { ActionBar } from '../ActionBar'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { prompt } from '../prompt'
import { ProviderContext } from '../Provider'
import { Text } from '../Text'

import { ConfirmFormContainer } from './confirm.style'

export const confirm = (config: ConfirmConfig | string) => {
  const innerConfig = isString(config) ? { message: config } : config

  return prompt<boolean>(({ onResolve }) => ({
    title: innerConfig.title,
    hideCloseIcon: true,
    persistent: true,
    Component: () => {
      const context = React.useContext(ProviderContext)

      return (
        <ConfirmFormContainer>
          <Text>{innerConfig.message}</Text>
          <ActionBar>
            <Button ghost secondary onClick={() => onResolve(false)}>
              {innerConfig.cancelLabel ?? context.cancelLabel}
            </Button>
            <Button
              error={innerConfig.type === 'delete'}
              ghost={innerConfig.type === 'delete'}
              elementLeft={
                innerConfig.confirmIcon ??
                (innerConfig.type === 'delete' ? (
                  <Icon icon="trash-outline" />
                ) : undefined)
              }
              onClick={() => onResolve(true)}
            >
              {innerConfig.confirmLabel ??
                context[
                  innerConfig.type === 'delete' ? 'deleteLabel' : 'confirmLabel'
                ]}
            </Button>
          </ActionBar>
        </ConfirmFormContainer>
      )
    },
    onClose: () => onResolve(false),
  }))
}

interface ConfirmConfig {
  message: string
  title?: string
  confirmLabel?: string
  cancelLabel?: string
  confirmIcon?: React.ReactElement
  /** @default info **/
  type?: 'info' | 'delete'
}
