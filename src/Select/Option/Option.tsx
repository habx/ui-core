import * as React from 'react'

import Icon from '../../Icon'
import SelectContext from '../Select.context'

import OptionProps from './Option.interface'
import {
  OptionContainer,
  OptionContent,
  SideElementContainer,
} from './Option.style'

const Option: React.FunctionComponent<OptionProps> = ({
  label,
  selected,
  focused,
  disabled,
  ...props
}) => {
  const ref = React.useRef<HTMLLIElement>(null)
  const { multi } = React.useContext(SelectContext)

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
        <SideElementContainer>
          {selected && (
            <React.Fragment>
              <Icon icon="check" />
              <Icon icon="close" data-hover />
            </React.Fragment>
          )}
        </SideElementContainer>
      )}
    </OptionContainer>
  )
}

export default React.memo(Option)
