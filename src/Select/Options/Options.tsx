import { ModalState } from '@delangle/use-modal'
import * as React from 'react'

import { Menu } from '../../Menu'
import { Option } from '../Option'
import { SelectContext } from '../Select.context'

import { OptionsProps } from './Options.interface'
import { SelectAllOption } from './Options.style'

export const Options: React.FunctionComponent<OptionsProps> = ({
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
      scrollable
    >
      {(modal) =>
        modal.state !== ModalState.closed && (
          <React.Fragment>
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
                disabled={option.disabled}
                focused={option.value === focusedOption}
                key={option.value}
                label={option.label}
                onClick={() => onSelect(option)}
                selected={option.selected}
              />
            ))}
          </React.Fragment>
        )
      }
    </Menu>
  )
}
