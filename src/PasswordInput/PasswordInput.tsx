import * as React from 'react'

import { useMergedRef } from '../_internal/useMergedRef'
import { Icon } from '../Icon'
import { TextInput } from '../TextInput'

import { PasswordInputProps } from './PasswordInput.interface'
import { HideButton } from './PasswordInput.style'

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>((props, rawRef) => {
  const ref = useMergedRef<HTMLInputElement>(rawRef)
  const [isContentHidden, setContentHidden] = React.useState(true)

  const handleToggleHidden = React.useCallback(() => {
    if (ref.current) {
      ref.current.focus()
    }

    setContentHidden((wasHidden) => !wasHidden)
  }, [ref])

  return (
    <TextInput
      ref={ref}
      type={isContentHidden ? 'password' : 'text'}
      {...props}
      elementRight={
        <HideButton
          data-hidden={isContentHidden}
          onClick={handleToggleHidden}
          type="button"
        >
          <Icon icon="eye" />
        </HideButton>
      }
    />
  )
})
