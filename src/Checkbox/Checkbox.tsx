import * as React from 'react'

import { useHasColoredBackground } from '../useHasColoredBackground'
import { withLabel } from '../withLabel'

import { CheckboxInnerProps } from './Checkbox.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  CheckIcon,
} from './Checkbox.style'

const InnerCheckbox = React.forwardRef<HTMLInputElement, CheckboxInnerProps>(
  ({ checked, error, small, value, ...props }, ref) => {
    const hasBackground = useHasColoredBackground()

    return (
      <FakeInputContainer
        data-background={hasBackground}
        error={error}
        data-small={small}
      >
        <Input
          ref={ref}
          {...props}
          checked={checked ?? Boolean(value)}
          data-testid="checkbox-input"
          type="checkbox"
        />
        <FakeInput data-error={error} />
        <CheckIcon icon="check" />
      </FakeInputContainer>
    )
  }
)

export const Checkbox = withLabel<HTMLInputElement>({
  orientation: 'horizontal-reverse',
  componentName: 'checkbox',
})<CheckboxInnerProps>(InnerCheckbox)
