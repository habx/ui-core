import { useDay } from '@datepicker-react/hooks'
import { isSameDay } from 'date-fns'
import * as React from 'react'

import { DatePickerRangeContext } from './DatePickerRange.context'
import { DayContainer } from './DatePickerRange.style'

export const Day: React.FunctionComponent<DayProps> = ({ date, dayLabel }) => {
  const dayRef = React.useRef<HTMLButtonElement>(null)
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
    startDate,
    endDate,
  } = React.useContext(DatePickerRangeContext)

  const {
    isSelected,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  })

  const state = React.useMemo(() => {
    if (
      startDate &&
      isSameDay(startDate, date) &&
      endDate &&
      isSameDay(endDate, date) &&
      startDate?.getTime() === endDate?.getTime()
    ) {
      return 'selected-single'
    }

    if (startDate && isSameDay(startDate, date)) {
      return 'selected-start'
    }

    if (endDate && isSameDay(endDate, date)) {
      return 'selected-end'
    }

    if (isSelected) {
      return 'selected'
    }

    if (isWithinHoverRange) {
      return 'within-hover-range'
    }

    if (disabledDate) {
      return 'disabled'
    }
  }, [date, disabledDate, isSelected, isWithinHoverRange, startDate, endDate])

  if (!dayLabel) {
    return <div />
  }

  return (
    <DayContainer
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      data-state={state}
    >
      {dayLabel}
    </DayContainer>
  )
}

interface DayProps {
  date: Date
  dayLabel: string
}
