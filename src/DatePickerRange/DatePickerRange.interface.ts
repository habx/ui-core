import {
  FocusedInput,
  useDatepicker,
  UseDatepickerProps,
} from '@datepicker-react/hooks'
import * as React from 'react'

import { WithLabel } from '../withLabel'

export interface DatePickerRangeContextValue
  extends Pick<
    ReturnType<typeof useDatepicker>,
    | 'focusedDate'
    | 'isDateFocused'
    | 'isDateSelected'
    | 'isDateHovered'
    | 'isDateBlocked'
    | 'isFirstOrLastSelectedDate'
    | 'onDateSelect'
    | 'onDateFocus'
    | 'onDateHover'
  > {
  locale: Locale | undefined
  startDate: Date | null
  endDate: Date | null
  numberOfMonths: number
}

export type DatePickerRangeValue = {
  start: Date | null
  end: Date | null
} | null

export interface DatePickerRangeInnerProps
  extends Pick<UseDatepickerProps, 'exactMinBookingDays'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange: (value: DatePickerRangeValue) => void
  value: DatePickerRangeValue
  small?: boolean
  disabled?: boolean
  error?: boolean
  locale: Locale

  /**
   * @default 2
   */
  numberOfMonths?: number

  /**
   * @default dd / MM / yyyy
   */
  inputDateFormat?: string
}

export interface DatePickerRangeProps
  extends WithLabel<DatePickerRangeInnerProps> {}

export interface DatePickerPanelProps
  extends Pick<UseDatepickerProps, 'exactMinBookingDays' | 'numberOfMonths'> {
  onAbort: () => void
  locale: Locale
  value: DatePickerRangeValue
  onChange: (value: DatePickerRangeValue) => void
}

export interface DatePickerRangeState {
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput
}
