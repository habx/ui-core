import * as React from 'react'

import { useUniqID } from '../_internal/useUniqId'
import { withLabel } from '../withLabel'

import { ToggleInnerProps } from './Toggle.interface'
import { FakeInputContainer, FakeInput, Input } from './Toggle.style'

const InnerToggle = React.forwardRef<HTMLInputElement, ToggleInnerProps>(
  (props, ref) => {
    const { error, disabled, id: rawId, checked, value, ...rest } = props

    const id = useUniqID(rawId)

    return (
      <FakeInputContainer>
        <Input
          ref={ref}
          {...rest}
          checked={checked ?? Boolean(value)}
          data-error={error}
          disabled={disabled}
          data-testid="toggle-input"
          type="checkbox"
          id={id}
        />
        <FakeInput tabIndex={disabled ? undefined : 0} htmlFor={id} />
      </FakeInputContainer>
    )
  }
)

export const Toggle = withLabel<HTMLDivElement>({
  orientation: 'horizontal',
  type: 'regular',
  componentName: 'toggle',
})<ToggleInnerProps>(InnerToggle)
