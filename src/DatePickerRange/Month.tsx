import { FirstDayOfWeek, useMonth } from '@datepicker-react/hooks'
import { format } from 'date-fns'
import * as React from 'react'

import { RoundIconButton } from '../RoundIconButton'

import { DatePickerRangeContext } from './DatePickerRange.context'
import {
  MonthContainer,
  MonthTable,
  MonthTableContent,
  MonthTableHeader,
  MonthTableHeaderCell,
  MonthLabel,
  MonthHeader,
} from './DatePickerRange.style'
import { Day } from './Day'

export const Month: React.VoidFunctionComponent<MonthProps> = ({
  year,
  month,
  firstDayOfWeek,
  goToNextMonths,
  goToPreviousMonths,
}) => {
  const { locale } = React.useContext(DatePickerRangeContext)

  const weekdayLabelFormat = React.useCallback(
    (date: Date) => format(date, 'EEEEE', { locale }),
    [locale]
  )

  const monthLabelFormat = React.useCallback(
    (date: Date) => format(date, 'LLLL', { locale }),
    [locale]
  )

  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
    weekdayLabelFormat,
    monthLabelFormat,
  })

  return (
    <MonthContainer>
      <MonthHeader>
        {!!goToPreviousMonths && (
          <RoundIconButton icon="arrow-west" onClick={goToPreviousMonths} />
        )}
        <MonthLabel>{monthLabel}</MonthLabel>
        {!!goToNextMonths && (
          <RoundIconButton icon="arrow-east" onClick={goToNextMonths} />
        )}
      </MonthHeader>
      <MonthTable>
        <MonthTableHeader>
          {weekdayLabels.map((dayLabel, dayLabelIndex) => (
            <MonthTableHeaderCell key={dayLabelIndex}>
              {dayLabel}
            </MonthTableHeaderCell>
          ))}
        </MonthTableHeader>
        <MonthTableContent>
          {days.map((day, index) => {
            if (typeof day === 'object') {
              return (
                <Day
                  date={day.date}
                  key={day.date.toString()}
                  dayLabel={day.dayLabel}
                />
              )
            }

            return <div key={index} />
          })}
        </MonthTableContent>
      </MonthTable>
    </MonthContainer>
  )
}

interface MonthProps {
  year: number
  month: number
  firstDayOfWeek: FirstDayOfWeek
  goToPreviousMonths?: () => void
  goToNextMonths?: () => void
}
