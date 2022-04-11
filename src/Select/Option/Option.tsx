import * as React from 'react'

import { Icon } from '../../Icon'
import { Text } from '../../Text'
import { useThemeVariant } from '../../useThemeVariant'
import { SelectContext } from '../Select.context'

import { OptionProps } from './Option.interface'
import {
  OptionContainer,
  OptionContent,
  SideElementContainer,
} from './Option.style'

const InnerOption: React.FunctionComponent<
  React.PropsWithChildren<OptionProps>
> = ({ label, description, selected, focused, disabled, ...props }) => {
  const ref = React.useRef<HTMLLIElement>(null)
  const { multi } = React.useContext(SelectContext)

  React.useEffect(() => {
    if (focused && ref.current) {
      ref.current.focus()
    }
  }, [focused])

  const theme = useThemeVariant()

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
      {(multi || description) && (
        <SideElementContainer>
          {description && (
            <Text
              type="captionSmall"
              variation="lowContrast"
              color={selected ? theme.colors.primary.base : undefined}
            >
              {description}
            </Text>
          )}
          {selected && multi && (
            <React.Fragment>
              {!description && <Icon icon="check" />}
              <Icon icon="close" data-hover />
            </React.Fragment>
          )}
        </SideElementContainer>
      )}
    </OptionContainer>
  )
}

export const Option = React.memo(InnerOption)
