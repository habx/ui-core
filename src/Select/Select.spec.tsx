import { render, fireEvent, act } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import Select from './index'
import { OPTIONS } from './Select.data'
import SelectProps from './Select.interface'

import '@testing-library/jest-dom/extend-expect'

jest.useFakeTimers()

const renderOpenedSelect = (element: React.ReactElement<SelectProps>) => {
  const result = render(element)

  fireEvent.click(result.getByTestId('select-container'))

  act(() => {
    jest.advanceTimersByTime(999)
  })

  return result
}

describe('Select component', () => {
  describe('UI: not filterable', () => {
    it('should not render an input even if options opened', () => {
      const { queryByTestId } = renderOpenedSelect(<Select options={OPTIONS} />)

      expect(queryByTestId('select-input')).toBeFalsy()
    })

    it('should render placeholder inside Placeholder if no value given', () => {
      const { queryByTestId } = render(
        <Select options={OPTIONS} placeholder="Placeholder test content" />
      )

      expect((queryByTestId('select-placeholder') as Node).textContent).toEqual(
        'Placeholder test content'
      )
    })

    it('should render value inside Placeholder if value is given', () => {
      const { queryByTestId } = render(
        <Select
          options={OPTIONS}
          placeholder="Placeholder test content"
          value={OPTIONS[0].value}
        />
      )

      expect((queryByTestId('select-placeholder') as Node).textContent).toEqual(
        OPTIONS[0].label
      )
    })

    it('should open the dropdown when click on SelectContent and open = false', () => {
      const { getByTestId } = render(<Select options={[]} />)

      const optionsContainer = getByTestId('options-container')

      expect(optionsContainer).toHaveAttribute('data-state', 'closed')
      fireEvent.click(getByTestId('select-container'))
      expect(optionsContainer).toHaveAttribute('data-state', 'opening')
    })

    it('should close the dropdown when click on SelectContent and open = true', () => {
      const { getByTestId } = renderOpenedSelect(<Select options={[]} />)

      const optionsContainer = getByTestId('options-container')

      fireEvent.click(getByTestId('select-container'))
      expect(optionsContainer).toHaveAttribute('data-state', 'closing')
    })

    it('should display all the options', () => {
      const { queryAllByTestId } = renderOpenedSelect(
        <Select options={OPTIONS} />
      )

      expect(queryAllByTestId('option-container')).toHaveLength(OPTIONS.length)
    })

    it('should render no reset icon if canReset = false', () => {
      const { queryByTestId } = render(
        <Select options={OPTIONS} canReset={false} />
      )

      const resetIcon = queryByTestId('select-reset-icon')

      expect(resetIcon).toBeFalsy()
    })
  })

  describe('UI: filterable', () => {
    it('should not render an input if options closed', () => {
      const { queryByTestId } = render(<Select options={OPTIONS} filterable />)
      expect(queryByTestId('select-input')).toBeFalsy()
    })

    it('should render an input if options opened', () => {
      const { queryByTestId } = renderOpenedSelect(
        <Select options={OPTIONS} filterable />
      )
      expect(queryByTestId('select-input')).toBeTruthy()
    })

    it('should display all the options if search is empty', () => {
      const { queryAllByTestId } = renderOpenedSelect(
        <Select options={OPTIONS} filterable />
      )

      expect(queryAllByTestId('option-container')).toHaveLength(OPTIONS.length)
    })

    it('should display filtered options if search is not empty', () => {
      const { queryByTestId, queryAllByTestId } = renderOpenedSelect(
        <Select options={OPTIONS} filterable />
      )

      fireEvent.change(queryByTestId('select-input') as Element, {
        target: { value: 'ann' },
      })
      const options = queryAllByTestId('option-container')
      expect(options).toHaveLength(2)
      expect(options[0].textContent).toEqual('Annecy')
      expect(options[1].textContent).toEqual('Villeurbanne')
    })
  })

  describe('Interaction: not multi', () => {
    it('should close the dropdown when click on an option', () => {
      const { getAllByTestId, getByTestId } = renderOpenedSelect(
        <Select options={OPTIONS} filterable />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(getByTestId('options-container')).toHaveAttribute(
        'data-state',
        'closing'
      )
    })

    it('should return option when click on an unselected option', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={OPTIONS}
          filterable
          onChange={spyOnChange}
          value={OPTIONS[0].value}
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith(OPTIONS[3].value)).toBe(true)
    })
  })

  describe('Interaction: multi', () => {
    it('should not close the dropdown when click on an option', () => {
      const { getAllByTestId, getByTestId } = renderOpenedSelect(
        <Select options={OPTIONS} filterable multi />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(getByTestId('options-container')).toHaveAttribute(
        'data-state',
        'opened'
      )
    })

    it('should return an array with the current values and the new option value when click on an unselected option', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={OPTIONS}
          filterable
          multi
          onChange={spyOnChange}
          value={[OPTIONS[2].value]}
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith([OPTIONS[2].value, OPTIONS[3].value])).toBe(
        true
      )
    })

    it('should return an empty array if click on an option already selected', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={OPTIONS}
          filterable
          multi
          onChange={spyOnChange}
          value={[OPTIONS[3].value]}
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith([])).toBe(true)
    })
  })
})
