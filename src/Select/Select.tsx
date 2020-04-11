import * as React from 'react'

import useHasColoredBackground from '../_internal/useHasColoredBackground'
import useMergedRef from '../_internal/useMergedRef'
import Icon from '../Icon'
import withLabel from '../withLabel'

import Options from './Options'
import SelectContext from './Select.context'
import { useSelect } from './Select.hooks'
import { SelectContextValue, SelectInnerProps } from './Select.interface'
import {
  CustomIconContainer,
  IconsContainer,
  IconRightContainer,
  Placeholder,
  ResetIconContainer,
  SearchInput,
  SelectContainer,
} from './Select.style'

const Select = React.forwardRef<HTMLDivElement, SelectInnerProps>(
  (props, ref) => {
    const {
      multi = false,
      light = false,
      small = false,
      tiny = false,
      filterable = false,
      disabled = false,
      canSelectAll = false,
      canReset = true,
      elementLeft,
      elementRight,
      selectAllLabel,
      value,
      options,
      placeholder,
      onChange,
      ...rest
    } = props

    const containerRef = useMergedRef<HTMLDivElement>(ref)
    const hasBackground = useHasColoredBackground()

    const [state, actions] = useSelect({
      onChange,
      options,
      multi,
      value,
      canReset,
    })

    const context = React.useMemo<SelectContextValue>(
      () => ({ multi, canSelectAll }),
      [multi, canSelectAll]
    )

    return (
      <SelectContext.Provider value={context}>
        <SelectContainer
          ref={containerRef}
          data-disabled={disabled}
          data-open={state.isOpened}
          data-background={hasBackground}
          data-light={light}
          data-small={small}
          data-tiny={tiny}
          data-testid="select-container"
          onClick={actions.onOpen}
          {...rest}
        >
          {elementLeft && (
            <CustomIconContainer>{elementLeft}</CustomIconContainer>
          )}
          {filterable && state.isOpened ? (
            <SearchInput
              data-testid="select-input"
              value={state.query}
              onChange={actions.onSearch}
              ref={(inputRef) => inputRef?.focus()}
            />
          ) : (
            <Placeholder
              data-testid="select-placeholder"
              data-empty={!state.label}
            >
              {state.label ?? placeholder}
            </Placeholder>
          )}
          <IconsContainer
            onMouseEnter={actions.onMouseEnterIcons}
            onMouseLeave={actions.onMouseLeaveIcons}
          >
            {state.showResetIcon && (
              <ResetIconContainer data-visible={state.showResetIcon}>
                <Icon
                  data-testid="select-reset-icon"
                  onClick={actions.onReset}
                  icon="close"
                />
              </ResetIconContainer>
            )}
            <IconRightContainer data-visible={!state.showResetIcon}>
              {elementRight ?? (
                <Icon
                  icon={state.isOpened ? 'chevron-north' : 'chevron-south'}
                />
              )}
            </IconRightContainer>
          </IconsContainer>
        </SelectContainer>
        <Options
          options={state.visibleOptions}
          open={state.isOpened}
          allSelected={state.areAllOptionsSelected}
          onSelect={actions.onSelect}
          onSelectAll={actions.onSelectAll}
          focusedOption={state.focusedOption}
          selectAllLabel={selectAllLabel}
          onClose={actions.onClose}
          containerRef={containerRef}
        />
      </SelectContext.Provider>
    )
  }
)

export default withLabel<HTMLDivElement>({ orientation: 'vertical' })<
  SelectInnerProps
>(Select)
