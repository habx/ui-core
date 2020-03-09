import * as React from 'react'

import withLabel from '../withLabel'

import { ToggleInnerProps } from './Toggle.interface'
import { ToggleContainer } from './Toggle.style'

const Toggle = React.forwardRef<HTMLInputElement, ToggleInnerProps>(
  (props, ref) => {
    const { error, value, disabled, large, ...rest } = props

    return (
      <ToggleContainer
        ref={ref}
        data-selected={!!value}
        data-disabled={disabled}
        data-error={error}
        data-large={large}
        {...rest}
      />
    )
  }
)

export default withLabel<HTMLDivElement>({ orientation: 'horizontal' })<
  ToggleInnerProps
>(Toggle)
