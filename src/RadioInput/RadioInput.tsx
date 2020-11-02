import * as React from 'react'

import { useHasColoredBackground } from '../_internal/useHasColoredBackground'
import { useUniqID } from '../_internal/useUniqId'
import { withLabel } from '../withLabel'

import { RadioInputInnerProps } from './RadioInput.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  InnerCircle,
} from './RadioInput.style'

const InnerRadioInput = React.forwardRef<
  HTMLInputElement,
  RadioInputInnerProps
>((props, ref) => {
  const { error, disabled, id, small, ...rest } = props
  const checkboxId = useUniqID(id)
  const hasBackground = useHasColoredBackground()

  return (
    <FakeInputContainer data-small={small}>
      <Input
        ref={ref}
        {...rest}
        data-error={error}
        data-background={hasBackground}
        disabled={disabled}
        type="radio"
        id={checkboxId}
      />
      <FakeInput tabIndex={disabled ? undefined : 0} htmlFor={checkboxId}>
        <InnerCircle />
      </FakeInput>
    </FakeInputContainer>
  )
})

export const RadioInput = withLabel<HTMLInputElement>({
  orientation: 'horizontal-reverse',
})<RadioInputInnerProps>(InnerRadioInput)
