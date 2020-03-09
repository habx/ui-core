import * as React from 'react'

import withLabel from '../withLabel'

import { ToggleInnerProps } from './Toggle.interface'
import { ToggleContainer } from './Toggle.style'

const Toggle = React.forwardRef<HTMLInputElement, ToggleInnerProps>(
  (props, ref) => {
    const { error, value, disabled, large, onChange, onClick, ...rest } = props

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(e)
      }

      if (onChange) {
        return onChange(!value)
      }
    }

    return (
      <ToggleContainer
        ref={ref}
        data-selected={!!value}
        data-disabled={disabled}
        data-error={error}
        data-large={large}
        {...rest}
        onClick={handleClick}
      />
    )
  }
)

export default withLabel<HTMLDivElement>({ orientation: 'horizontal' })<
  ToggleInnerProps
>(Toggle)
