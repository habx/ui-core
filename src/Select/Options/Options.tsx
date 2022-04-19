import { ModalState } from '@delangle/use-modal'
import * as React from 'react'

import { Menu } from '../../Menu'
import { MenuSection } from '../../MenuSection'
import { Option } from '../Option'
import { SelectContext } from '../Select.context'
import { EnrichedSelectOption } from '../Select.interface'

import { OptionsProps } from './Options.interface'
import { SelectAllOption } from './Options.style'

const DEFAULT_GROUP = 'default'

export const Options: React.FunctionComponent<
  React.PropsWithChildren<OptionsProps>
> = ({
  options,
  open,
  focusedOption,
  allSelected,
  onSelect,
  onSelectAll,
  selectAllLabel,
  onClose,
  containerRef,
  withOverlay,
  onMouseOver,
  onMouseLeave,
}) => {
  const { multi, canSelectAll } = React.useContext(SelectContext)

  const groupedOption = React.useMemo(() => {
    return options.reduce((ctx, option) => {
      const group = option.group ?? DEFAULT_GROUP
      return {
        ...ctx,
        [group]: ctx[group] ? [...ctx[group], option] : [option],
      }
    }, {} as Record<string, EnrichedSelectOption[]>)
  }, [options])

  return (
    <Menu
      data-testid="options-container"
      open={open}
      onClose={onClose}
      triggerRef={containerRef}
      fullScreenOnMobile
      scrollable
      withOverlay={withOverlay}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
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
            {Object.values(groupedOption).map((group, index) => (
              <MenuSection key={`option-group-${index}`}>
                {group.map((option) => (
                  <Option
                    disabled={option.disabled}
                    focused={option.value === focusedOption}
                    key={option.value}
                    label={option.label}
                    description={option.description}
                    onClick={() => onSelect(option)}
                    selected={option.selected}
                  />
                ))}
              </MenuSection>
            ))}
          </React.Fragment>
        )
      }
    </Menu>
  )
}
