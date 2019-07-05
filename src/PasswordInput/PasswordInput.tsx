import * as React from 'react'

import TextInput from '../TextInput'

import PasswordInputProps from './PasswordInput.interface'
import { HiddenInputContainer, HideButton } from './PasswordInput.style'

const PasswordInput: React.FunctionComponent<PasswordInputProps> = props => {
  const ref = React.useRef(null)
  const [isContentHidden, setContentHidden] = React.useState(true)

  const handleToggleHidden = React.useCallback(() => {
    if (ref.current) {
      ref.current.focus()
    }

    setContentHidden(wasHidden => !wasHidden)
  }, [ref])

  return (
    <HiddenInputContainer>
      <TextInput
        ref={ref}
        {...props}
        type={isContentHidden ? 'password' : 'text'}
      />
      <HideButton data-active={!isContentHidden} onClick={handleToggleHidden} />
    </HiddenInputContainer>
  )
}

export default PasswordInput
