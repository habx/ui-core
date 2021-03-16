import * as React from 'react'

import {
  DatePickerRange,
  DatePickerRangeProps,
  DatePickerRangeValue,
} from '../DatePickerRange'

export const DatePickerSingle: React.VoidFunctionComponent<DatePickerSingleProps> = ({
  value,
  onChange,
  ...props
}) => {
  const cleanValue = React.useMemo<DatePickerRangeValue>(
    () => ({ start: value, end: value }),
    [value]
  )

  const handleChange = React.useCallback(
    (newValue: DatePickerRangeValue | null) =>
      onChange(newValue?.start ?? null),
    [onChange]
  )

  return (
    <DatePickerRange
      value={cleanValue}
      onChange={handleChange}
      exactMinBookingDays
      {...props}
    />
  )
}

export interface DatePickerSingleProps
  extends Omit<
    DatePickerRangeProps,
    'value' | 'onChange' | 'exactMinBookingDays'
  > {
  value: Date | null
  onChange: (value: Date | null) => void
}
