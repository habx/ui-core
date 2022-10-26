import * as React from 'react'

import { useMergedRef } from '../_internal/useMergedRef'
import { Icon } from '../Icon'
import { useHasColoredBackground } from '../useHasColoredBackground'
import { withLabel } from '../withLabel'

import { Options } from './Options'
import { SelectContext } from './Select.context'
import { useSelect } from './Select.hooks'
import { SelectContextValue, SelectInnerProps } from './Select.interface'
import {
  ElementLeftContainer,
  IconsContainer,
  ElementRightContainer,
  Placeholder,
  ResetIconContainer,
  SearchInput,
  SelectContainer,
  Line,
} from './Select.style'

const InnerSelect = React.forwardRef<HTMLDivElement, SelectInnerProps>(
  (props, ref) => {
    const {
      multi = false,
      round = false,
      // eslint-disable-next-line deprecation/deprecation
      light = false,
      bare = false,
      small = false,
      tiny = false,
      valuePosition = 'left',
      filterable = false,
      disabled = false,
      canSelectAll = false,
      canReset = true,
      openOnHover = false,
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
    })

    const context = React.useMemo<SelectContextValue>(
      () => ({ multi, canSelectAll }),
      [multi, canSelectAll]
    )

    const onMouseOver = openOnHover ? actions.onHover : undefined
    const onMouseLeave =
      openOnHover && !state.isFocused ? actions.onClose : undefined

    return (
      <SelectContext.Provider value={context}>
        <SelectContainer
          ref={containerRef}
          data-disabled={disabled}
          data-open={state.isOpened}
          data-background={hasBackground}
          data-light={light}
          data-round={round}
          data-small={small}
          data-bare={bare}
          data-tiny={tiny}
          data-testid="select-container"
          onClick={actions.onClick}
          color={state.color}
          tabIndex={0}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          {...rest}
        >
          {elementLeft && (
            <ElementLeftContainer
              onMouseOver={(e) => {
                e.stopPropagation()
                onMouseLeave?.()
              }}
            >
              {elementLeft}
            </ElementLeftContainer>
          )}
          {filterable && state.isOpened ? (
            <SearchInput
              autoComplete="off"
              data-testid="select-input"
              value={state.query}
              onChange={actions.onSearch}
              ref={(inputRef) => inputRef?.focus()}
            />
          ) : (
            <Placeholder
              data-testid="select-placeholder"
              data-empty={!state.label?.length}
              data-position={valuePosition}
            >
              {(state.label ?? [<>{placeholder}</>]).map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </Placeholder>
          )}
          <IconsContainer>
            {state.selectedOptions.length > 0 && canReset && (
              <ResetIconContainer>
                <Icon
                  data-testid="select-reset-icon"
                  onClick={actions.onReset}
                  icon="close"
                />
                <Line />
              </ResetIconContainer>
            )}
            <ElementRightContainer
              onMouseOver={(e) => {
                e.stopPropagation()
                onMouseLeave?.()
              }}
            >
              {elementRight ?? (
                <Icon
                  icon={state.isOpened ? 'chevron-north' : 'chevron-south'}
                />
              )}
            </ElementRightContainer>
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
          withOverlay={!openOnHover}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
      </SelectContext.Provider>
    )
  }
)

export const Select = withLabel<HTMLDivElement>({
  orientation: 'vertical',
})<SelectInnerProps>(InnerSelect)
