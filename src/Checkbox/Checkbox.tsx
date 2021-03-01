import * as React from 'react'

import { useUniqID } from '../_internal/useUniqId'
import { withLabel } from '../withLabel'

import { CheckboxInnerProps } from './Checkbox.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  CheckIcon,
} from './Checkbox.style'

const InnerCheckbox = React.forwardRef<HTMLInputElement, CheckboxInnerProps>(
  (props, ref) => {
    const {
      error,
      disabled,
      small = false,
      id: rawId,
      checked,
      value,
      ...rest
    } = props

    const id = useUniqID(rawId)

    return (
      <FakeInputContainer>
        <Input
          ref={ref}
          {...rest}
          checked={checked ?? Boolean(value)}
          data-error={error}
          data-small={small}
          disabled={disabled}
          data-testid="checkbox-input"
          type="checkbox"
          id={id}
        />
        <FakeInput tabIndex={disabled ? undefined : 0} htmlFor={id}>
          <CheckIcon icon="check" />
        </FakeInput>
      </FakeInputContainer>
    )
  }
)

export const Checkbox = withLabel<HTMLInputElement>({
  orientation: 'horizontal-reverse',
  componentName: 'checkbox',
})<CheckboxInnerProps>(InnerCheckbox)
