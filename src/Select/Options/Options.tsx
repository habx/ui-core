import * as React from 'react'
import { createPortal } from 'react-dom'

import { useIsSmallScreen } from '../../_internal/hooks'
import { isClientSide } from '../../_internal/ssr'
import Modal from '../../Modal'
import Option from '../Option'

import OptionsProps from './Options.interface'
import {
  OptionsContainer,
  OptionsModalContent,
  OptionsContent,
  Description,
  DescriptionAnnotation,
  EmptyOptions,
  SelectAllOption,
  MAX_HEIGHT,
} from './Options.style'

const Options: React.FunctionComponent<OptionsProps> = ({
  options,
  open,
  compact,
  description,
  annotation,
  multi,
  focusedItem,
  isOptionSelected,
  allSelected,
  onSelect,
  onSelectAll,
  canSelectAll,
  selectAllLabel,
  onClose,
  optionDisabled,
  wrapperRect,
}) => {
  const isSmallScreen = useIsSmallScreen()
  const position = React.useMemo(() => {
    return isClientSide &&
      !isSmallScreen &&
      wrapperRect.top + MAX_HEIGHT > window.innerHeight &&
      wrapperRect.top - MAX_HEIGHT > 0
      ? 'top'
      : 'bottom'
  }, [isSmallScreen, open]) // eslint-disable-line

  const maxHeight = React.useMemo(
    () =>
      position === 'bottom' && open
        ? window.innerHeight - wrapperRect.top - wrapperRect.height - 32
        : undefined,
    [open, position] // eslint-disable-line
  )
  const content = (
    <OptionsContent noMaxHeight={isSmallScreen} maxHeight={maxHeight}>
      {description && (
        <Description>
          <div>{description}</div>
          <DescriptionAnnotation>{annotation}</DescriptionAnnotation>
        </Description>
      )}
      {options.length > 0 ? (
        <React.Fragment>
          {multi && canSelectAll && (
            <SelectAllOption
              selected={allSelected}
              focused={false}
              onClick={() => onSelectAll(!allSelected)}
              multi={multi}
              compact={compact}
              label={selectAllLabel || 'Select all'}
            />
          )}
          {options.map(option => {
            const disabled = optionDisabled(option)
            return (
              <Option
                key={option.value}
                selected={isOptionSelected(option)}
                onClick={() => (!disabled ? onSelect(option) : null)}
                focused={option === focusedItem}
                multi={multi}
                compact={compact}
                disabled={disabled}
                {...option}
              />
            )
          })}
        </React.Fragment>
      ) : (
        <EmptyOptions>Aucune option</EmptyOptions>
      )}
    </OptionsContent>
  )

  if (isSmallScreen) {
    return (
      <Modal open={open} onClose={onClose}>
        <OptionsModalContent>{content}</OptionsModalContent>
      </Modal>
    )
  }

  const optionsContainer = (
    <OptionsContainer
      data-testid="options-container"
      data-open={open}
      data-position={position}
      wrapperRect={wrapperRect}
      maxHeight={maxHeight}
      backgroundColor={'#FFFFFF'}
    >
      {content}
    </OptionsContainer>
  )

  if (isClientSide) {
    return createPortal(optionsContainer, document.body)
  }

  return optionsContainer
}

export default Options
