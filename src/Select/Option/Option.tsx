import * as React from 'react'

import Icon from '../../Icon'

import OptionProps from './Option.interface'
import { OptionContainer, OptionContent, IconContainer } from './Option.style'

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
      <OptionContent>{label}</OptionContent>
      {multi && (
        <IconContainer>
          {selected && (
            <React.Fragment>
              <Icon icon="check" />
              <Icon icon="close" data-hover />
            </React.Fragment>
          )}
        </IconContainer>
      )}
    </OptionContainer>
  )
}

export default Option
