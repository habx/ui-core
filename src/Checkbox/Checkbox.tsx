import * as React from 'react'

import { useHasColoredBackground } from '../_internal/theme/useHasColoredBackground'
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
          error={error}
          data-small={small}
        >
          <Input
            ref={ref}
            {...props}
            checked={checked ?? Boolean(value)}
            data-testid="checkboxInput"
            type="checkbox"
          />
          <FakeInput data-error={error} />
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
