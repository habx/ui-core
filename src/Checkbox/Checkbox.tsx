import * as React from 'react'

import { useHasColoredBackground } from '../_internal/useHasColoredBackground'
import { withSemanticLabel } from '../withLabel'

import { CheckboxInnerProps } from './Checkbox.interface'
import {
  Input,
  FakeInputContainer,
  FakeInput,
  CheckIcon,
} from './Checkbox.style'

const InnerCheckbox = React.forwardRef<HTMLInputElement, CheckboxInnerProps>(
  ({ checked, children, error, small, value, ...props }, ref) => {
    const hasBackground = useHasColoredBackground()

    return (
      <>
        <FakeInputContainer
          data-background={hasBackground}
          data-error={error}
          data-small={small}
        >
          <Input
            ref={ref}
            {...props}
            checked={checked ?? Boolean(value)}
            data-testid="checkboxInput"
            type="checkbox"
          />
          <FakeInput />
          <CheckIcon icon="check" />
        </FakeInputContainer>
        {children}
      </>
    )
  }
)

export const Checkbox = withSemanticLabel<HTMLInputElement>({
  orientation: 'horizontal-reverse',
  testid: 'checkboxLabel',
})<CheckboxInnerProps>(InnerCheckbox)
