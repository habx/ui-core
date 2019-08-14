import * as React from 'react'

import useMergedRef from '../_internal/useMergedRef'
import TextInput from '../TextInput'

import PasswordInputProps from './PasswordInput.interface'
import { HiddenInputContainer, HideButton } from './PasswordInput.style'

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const domRef = useMergedRef<HTMLInputElement>(ref)
    const [isContentHidden, setContentHidden] = React.useState(true)

    const handleToggleHidden = React.useCallback(() => {
      if (domRef.current) {
        domRef.current.focus()
      }

      setContentHidden(wasHidden => !wasHidden)
    }, [domRef])

    return (
      <HiddenInputContainer>
        <TextInput
          ref={domRef}
          {...props}
          type={isContentHidden ? 'password' : 'text'}
        />
        <HideButton
          data-active={!isContentHidden}
          onClick={handleToggleHidden}
        />
      </HiddenInputContainer>
    )
  }
)

export default PasswordInput
