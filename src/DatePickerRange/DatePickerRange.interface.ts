import {
  FocusedInput,
  useDatepicker,
  UseDatepickerProps,
} from '@datepicker-react/hooks'

import { FakeInputProps } from '../FakeInput'

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

export interface DatePickerRangeProps
  extends Pick<UseDatepickerProps, 'exactMinBookingDays'>,
    Omit<FakeInputProps, 'onChange' | 'value'> {
  onChange: (value: DatePickerRangeValue) => void
  value: DatePickerRangeValue
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
