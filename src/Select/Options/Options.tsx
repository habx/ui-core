import { ModalState } from '@delangle/use-modal'
import * as React from 'react'

import Menu from '../../Menu'
import Option from '../Option'
import SelectContext from '../Select.context'

import OptionsProps from './Options.interface'
import { OptionsContent, SelectAllOption } from './Options.style'

const Options: React.FunctionComponent<OptionsProps> = ({
  options,
  open,
  focusedOption,
  allSelected,
  onSelect,
  onSelectAll,
  selectAllLabel,
  onClose,
  containerRef,
}) => {
  const { multi, canSelectAll } = React.useContext(SelectContext)

  return (
    <Menu
      data-testid="options-container"
      open={open}
      onClose={onClose}
      triggerRef={containerRef}
      fullScreenOnMobile
    >
      {(modal) =>
        modal.state !== ModalState.closed && (
          <OptionsContent>
            {multi && canSelectAll && (
              <SelectAllOption
                selected={allSelected}
                focused={false}
                onClick={() => onSelectAll(!allSelected)}
                label={selectAllLabel || 'Select all'}
              />
            )}
            {options.map((option) => (
              <Option
                key={option.value}
                selected={option.selected}
                onClick={() => onSelect(option)}
                focused={option.value === focusedOption}
                disabled={option.disabled}
                {...option}
              />
            ))}
          </OptionsContent>
        )
      }
    </Menu>
  )
}

export default Options
