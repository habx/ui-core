import * as React from 'react'

import Toggle from '../Toggle'

import OptionProps from './Option.interface'
import { OptionContainer } from './Option.style'

const Option: React.FunctionComponent<OptionProps> = ({
  multi,
  label,
  selected,
  focused,
  disabled,
  ...props
}) => {
  const ref = React.useRef<HTMLLIElement>(null)

  React.useEffect(() => {
    if (focused && ref.current) {
      ref.current.focus()
    }
  }, [focused])

  return (
    <OptionContainer
      data-testid="option-container"
      data-selected={selected}
      data-disabled={disabled}
      ref={ref}
      tabIndex={0}
      {...props}
    >
      {multi && <Toggle state={selected ? 'full' : 'empty'} />}
      {label}
    </OptionContainer>
  )
}

export default Option
