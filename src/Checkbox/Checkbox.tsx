import * as React from 'react'

import useHasColoredBackground from '../_internal/useHasColoredBackground'
import useUniqID from '../_internal/useUniqId'
import withLabel from '../withLabel'

import { CheckboxInnerProps } from './Checkbox.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  CheckIcon,
} from './Checkbox.style'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxInnerProps>(
  (props, ref) => {
    const { error, value, checked, disabled, id, children, ...rest } = props
    const checkboxId = useUniqID(id)
    const hasBackground = useHasColoredBackground()

    return (
      <FakeInputContainer>
        <Input
          ref={ref}
          {...rest}
          data-error={error}
          data-background={hasBackground}
          checked={!!value || !!checked}
          disabled={disabled}
          type="checkbox"
          id={checkboxId}
          data-testid="checkboxInput"
        />
        <FakeInput
          data-testid="checkboxLabel"
          tabIndex={disabled ? undefined : 0}
          htmlFor={checkboxId}
        >
          <CheckIcon icon="check" />
        </FakeInput>
        {children}
      </FakeInputContainer>
    )
  }
)

export default withLabel<HTMLInputElement>({
  orientation: 'horizontal-reverse',
})<CheckboxInnerProps>(Checkbox)
