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

const InnerCheckbox = React.forwardRef<HTMLInputElement, CheckboxInnerProps>(
  ({ checked, children, error, id, small, value, ...props }, ref) => {
    const checkboxId = useUniqID(id)
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
            id={checkboxId}
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

export const Checkbox = withLabel<HTMLInputElement>({
  orientation: 'horizontal-reverse',
})<CheckboxInnerProps>(InnerCheckbox)
