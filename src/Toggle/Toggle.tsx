import * as React from 'react'

import { withLabel } from '../withLabel'

import { ToggleInnerProps } from './Toggle.interface'
import { FakeInputContainer, FakeInput, Input } from './Toggle.style'

const InnerToggle = React.forwardRef<HTMLInputElement, ToggleInnerProps>(
  (props, ref) => {
    const { checked, error, value, ...rest } = props

    return (
      <FakeInputContainer>
        <Input
          {...rest}
          checked={checked ?? Boolean(value)}
          data-error={error}
          data-testid="toggle-input"
          ref={ref}
          type="checkbox"
        />

        <FakeInput htmlFor={rest.id} tabIndex={rest.disabled ? undefined : 0} />
      </FakeInputContainer>
    )
  }
)

export const Toggle = withLabel<HTMLDivElement>({
  orientation: 'horizontal',
  type: 'regular',
  componentName: 'toggle',
})<ToggleInnerProps>(InnerToggle)
