import { ModalState } from '@delangle/use-modal'
import { format } from 'date-fns'
import * as React from 'react'

import { FakeInput } from '../FakeInput'
import { menuDefaultPositionSetter } from '../Menu'
import { TogglePanel, TogglePanelStyleSetter } from '../TogglePanel'
import { useHasColoredBackground } from '../useHasColoredBackground'

import { DatePickerPanel } from './DatePickerPanel'
import { DatePickerRangeProps } from './DatePickerRange.interface'

const togglePanelStyleSetter: TogglePanelStyleSetter = (
  dimensions,
  triggerDimensions
) => {
  const menuHeight = dimensions.clientHeight
  const menuWidth = dimensions.clientWidth

  return menuDefaultPositionSetter({
    triggerDimensions,
    menuHeight,
    menuWidth,
    position: 'centered',
  })
}

export const DatePickerRange: React.VoidFunctionComponent<DatePickerRangeProps> = ({
  value,
  onChange,
  exactMinBookingDays,
  onFocus,
  inputDateFormat = 'dd / MM / yyyy',
  small,
  disabled,
  error,
  placeholder,
  locale,
  numberOfMonths,
  ...props
}) => {
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const [isOpened, setIsOpened] = React.useState(false)
  const hasBackground = useHasColoredBackground()

  const handleTextInputFocus = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(e)
      setIsOpened(true)
    },
    [onFocus]
  )

  const inputValue = React.useMemo(() => {
    if (!value) {
      return placeholder ?? ''
    }

    if (exactMinBookingDays) {
      if (!value.start) {
        return ''
      }

      return format(value.start, inputDateFormat)
    }

    const startLabel = value.start ? format(value.start, inputDateFormat) : '?'
    const endLabel = value.end ? format(value.end, inputDateFormat) : '?'

    return `${startLabel}  – ${endLabel}`
  }, [exactMinBookingDays, inputDateFormat, placeholder, value])

  return (
    <React.Fragment>
      <TogglePanel
        triggerRef={triggerRef}
        open={isOpened}
        onClose={() => setIsOpened(false)}
        setStyle={togglePanelStyleSetter}
      >
        {(modal) =>
          modal.state !== ModalState.closed && (
            <DatePickerPanel
              value={value}
              onChange={(newValue) => {
                onChange(newValue)
                modal.close()
              }}
              onAbort={modal.close}
              exactMinBookingDays={exactMinBookingDays}
              locale={locale}
              numberOfMonths={numberOfMonths}
            />
          )
        }
      </TogglePanel>
      <FakeInput
        ref={triggerRef}
        onFocus={handleTextInputFocus}
        error={error}
        small={small}
        data-background={hasBackground}
        disabled={disabled}
        focused={isOpened}
        value={inputValue}
        {...props}
      />
    </React.Fragment>
  )
}
