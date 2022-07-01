import * as React from 'react'

import { withLabel } from '../withLabel'

import { FakeInputInnerProps } from './FakeInput.interface'
import {
  FakeInputContainer,
  FakeInputContent,
  IconButton,
  SideElementContainer,
} from './FakeInput.style'

const InnerFakeInput = React.forwardRef<HTMLInputElement, FakeInputInnerProps>(
  (props, ref) => {
    const {
      small = false,
      tiny = false,
      error = false,
      focused,
      canReset,
      disabled,
      elementLeft,
      elementRight,
      value,
      placeholder,
      ...rest
    } = props

    return (
      <FakeInputContainer
        ref={ref}
        data-small={small}
        data-tiny={tiny}
        data-error={error}
        data-focused={focused}
        data-disabled={disabled}
        tabIndex={0}
        {...rest}
      >
        {elementLeft && (
          <SideElementContainer data-position="left">
            {elementLeft}
          </SideElementContainer>
        )}

        <FakeInputContent data-placeholder={!value}>
          {value ?? placeholder ?? ''}
        </FakeInputContent>

        {(elementRight || canReset) && (
          <SideElementContainer data-position="right">
            {elementRight}

            {canReset && !!value && (
              <IconButton
                icon="close"
                tabIndex={-1}
                onFocus={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation()
                  props.onChange?.({
                    target: { ...e.target, value: '' },
                  } as React.ChangeEvent<HTMLInputElement>)
                }}
              />
            )}
          </SideElementContainer>
        )}
      </FakeInputContainer>
    )
  }
)

export const FakeInput = withLabel<HTMLDivElement>({
  orientation: 'vertical',
})<FakeInputInnerProps>(InnerFakeInput)
