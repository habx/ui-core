import { DatePickerRangeProps } from '../DatePickerRange'

export interface DatePickerProps
  extends Omit<
    DatePickerRangeProps,
    'value' | 'onChange' | 'exactMinBookingDays'
  > {
  value: Date | null
  onChange: (value: Date | null) => void
}
