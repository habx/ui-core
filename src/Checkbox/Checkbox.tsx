import * as React from 'react'

import { withLabel } from '../withLabel'

import { CheckboxInnerProps } from './Checkbox.interface'
import {
  CheckIcon,
  FakeInput,
  FakeInputContainer,
  Input,
} from './Checkbox.style'

const InnerCheckbox = React.forwardRef<HTMLInputElement, CheckboxInnerProps>(
  (props, ref) => {
    const { checked, error, small = false, value, ...rest } = props

    return (
      <FakeInputContainer>
        <Input
          {...rest}
          checked={checked ?? Boolean(value)}
          data-error={error}
          data-small={small}
          data-testid="checkbox-input"
          ref={ref}
          type="checkbox"
        />

        <FakeInput htmlFor={rest.id} tabIndex={rest.disabled ? undefined : 0}>
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
