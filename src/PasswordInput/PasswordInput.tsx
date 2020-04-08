import * as React from 'react'

import useMergedRef from '../_internal/useMergedRef'
import Icon from '../Icon'
import TextInput from '../TextInput'
import withLabel from '../withLabel'

import { PasswordInputInnerProps } from './PasswordInput.interface'
import { HiddenInputContainer, HideButton } from './PasswordInput.style'

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputInnerProps
>((props, ref) => {
  const domRef = useMergedRef<HTMLInputElement>(ref)
  const [isContentHidden, setContentHidden] = React.useState(true)

  const handleToggleHidden = React.useCallback(() => {
    if (domRef.current) {
      domRef.current.focus()
    }

    setContentHidden((wasHidden) => !wasHidden)
  }, [domRef])

  return (
    <HiddenInputContainer>
      <TextInput
        ref={domRef}
        {...props}
        type={isContentHidden ? 'password' : 'text'}
      />
      <HideButton
        data-hidden={isContentHidden}
        onClick={handleToggleHidden}
        type="button"
      >
        <Icon icon="eye" />
      </HideButton>
    </HiddenInputContainer>
  )
})

export default withLabel<HTMLInputElement>({ orientation: 'vertical' })<
  PasswordInputInnerProps
>(PasswordInput)
