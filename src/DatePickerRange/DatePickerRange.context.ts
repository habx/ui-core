import * as React from 'react'

import { DatePickerRangeContextValue } from './DatePickerRange.interface'

const DATE_PICKER_CONTEXT_DEFAULT_VALUE: DatePickerRangeContextValue = {
  startDate: null,
  endDate: null,
  locale: undefined,
  focusedDate: null,
  numberOfMonths: 1,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDateFocus: () => {},
  onDateHover: () => {},
  onDateSelect: () => {},
}

export const DatePickerRangeContext = React.createContext<DatePickerRangeContextValue>(
  DATE_PICKER_CONTEXT_DEFAULT_VALUE
)
