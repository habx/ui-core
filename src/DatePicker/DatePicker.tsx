import * as React from 'react'

import { DatePickerRange, DatePickerRangeValue } from '../DatePickerRange'

import { DatePickerProps } from './DatePicker.interface'

export const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  value,
  onChange,
  numberOfMonths = 1,
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
      numberOfMonths={numberOfMonths}
      {...props}
    />
  )
}
