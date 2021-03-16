import {
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from '@datepicker-react/hooks'
import { isSameDay } from 'date-fns'
import * as React from 'react'

import { ActionBar } from '../ActionBar'
import { Button } from '../Button'
import { RoundIconButton } from '../RoundIconButton'

import { DatePickerRangeContext } from './DatePickerRange.context'
import {
  DatePickerRangeContextValue,
  DatePickerPanelProps,
  DatePickerRangeState,
} from './DatePickerRange.interface'
import {
  DatePickerPanelContainer,
  DatePickerPanelContent,
  DatePickerMonthsContainer,
  MonthNavigationContainer,
} from './DatePickerRange.style'
import { Month } from './Month'

export const DatePickerPanel: React.VoidFunctionComponent<DatePickerPanelProps> = ({
  value,
  onChange,
  onAbort,
  exactMinBookingDays,
  numberOfMonths: rawNumberOfMonths,
  locale,
}) => {
  const [state, setState] = React.useState<DatePickerRangeState>({
    startDate: value?.start ?? null,
    endDate: value?.end ?? null,
    focusedInput: START_DATE,
  })

  React.useLayoutEffect(() => {
    const isVisibleDateEqual = (
      newValue: Date | null | undefined,
      currentValue: Date | null
    ) => {
      if (!newValue || !currentValue) {
        if (newValue && !currentValue) {
          return false
        }

        if (!newValue && currentValue) {
          return false
        }

        return true
      }

      return isSameDay(newValue, currentValue)
    }

    const isStartDateEqual = isVisibleDateEqual(value?.start, state.startDate)
    const isEndDateEqual = isVisibleDateEqual(value?.end, state.endDate)

    if (!isStartDateEqual || !isEndDateEqual) {
      setState({
        focusedInput: START_DATE,
        startDate: value?.start ?? null,
        endDate: value?.end ?? null,
      })
    }
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleDateChange = React.useCallback((data: OnDatesChangeProps) => {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE })
    } else {
      setState(data)
    }
  }, [])

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
    numberOfMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
    exactMinBookingDays,
    numberOfMonths: rawNumberOfMonths,
  })

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') {
        goToPreviousMonths()
      } else if (e.code === 'ArrowRight') {
        goToNextMonths()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [goToNextMonths, goToPreviousMonths])

  const context = React.useMemo<DatePickerRangeContextValue>(
    () => ({
      focusedDate,
      isDateFocused,
      isDateSelected,
      isDateHovered,
      isDateBlocked,
      isFirstOrLastSelectedDate,
      onDateSelect,
      onDateFocus,
      onDateHover,
      locale,
      numberOfMonths,
      startDate: state.startDate,
      endDate: state.endDate,
    }),
    [
      focusedDate,
      isDateFocused,
      isDateSelected,
      isDateHovered,
      isDateBlocked,
      isFirstOrLastSelectedDate,
      onDateSelect,
      onDateFocus,
      onDateHover,
      locale,
      numberOfMonths,
      state.startDate,
      state.endDate,
    ]
  )

  const hasOnlyOneMonth = numberOfMonths === 1

  return (
    <DatePickerRangeContext.Provider value={context}>
      <DatePickerPanelContainer
        backgroundColor={(theme) => theme.defaultBackground}
      >
        <DatePickerPanelContent>
          {!hasOnlyOneMonth && (
            <MonthNavigationContainer>
              <RoundIconButton icon="arrow-west" onClick={goToPreviousMonths} />
            </MonthNavigationContainer>
          )}
          <DatePickerMonthsContainer
            style={
              {
                '--date-picker-number-of-months': numberOfMonths,
              } as React.CSSProperties
            }
          >
            {activeMonths.map((month) => (
              <Month
                key={`${month.year}-${month.month}`}
                year={month.year}
                month={month.month}
                firstDayOfWeek={firstDayOfWeek}
                goToPreviousMonths={
                  hasOnlyOneMonth ? goToPreviousMonths : undefined
                }
                goToNextMonths={hasOnlyOneMonth ? goToNextMonths : undefined}
              />
            ))}
          </DatePickerMonthsContainer>
          {!hasOnlyOneMonth && (
            <MonthNavigationContainer>
              <RoundIconButton icon="arrow-east" onClick={goToNextMonths} />
            </MonthNavigationContainer>
          )}
        </DatePickerPanelContent>
        <ActionBar>
          <Button small secondary ghost onClick={onAbort}>
            Annuler
          </Button>
          <Button
            small
            onClick={() =>
              onChange({ start: state.startDate, end: state.endDate })
            }
          >
            Enregistrer
          </Button>
        </ActionBar>
      </DatePickerPanelContainer>
    </DatePickerRangeContext.Provider>
  )
}
