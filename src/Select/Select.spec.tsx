import { render, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import Select from './Select'
import { longData } from './Select.data'
import SelectProps from './Select.interface'

import '@testing-library/jest-dom/extend-expect'

const renderOpenedSelect = (element: React.ReactElement<SelectProps>) => {
  const result = render(element)

  fireEvent.click(result.getByTestId('select-content'))

  return result
}

describe('Select component', () => {
  describe('UI: not filterable', () => {
    it('should not render an input', () => {
      const { queryByTestId } = render(<Select options={longData} />)

      expect(queryByTestId('select-input')).toBeFalsy()
    })

    it('should render placeholder inside Placeholder if no value given', () => {
      const { queryByTestId } = render(
        <Select options={longData} placeholder="Placeholder test content" />
      )

      expect((queryByTestId('select-placeholder') as Node).textContent).toEqual(
        'Placeholder test content'
      )
    })

    it('should render value inside Placeholder if value is given', () => {
      const { queryByTestId } = render(
        <Select
          options={longData}
          placeholder="Placeholder test content"
          value={longData[0]}
        />
      )

      expect((queryByTestId('select-placeholder') as Node).textContent).toEqual(
        longData[0].label
      )
    })

    it('should open the dropdown when click on SelectContent and open = false', () => {
      const { getByTestId } = render(<Select options={[]} />)

      const optionsContainer = getByTestId('options-container')

      expect(optionsContainer).toHaveAttribute('data-open', 'false')
      fireEvent.click(getByTestId('select-content'))
      expect(optionsContainer).toHaveAttribute('data-open', 'true')
    })

    it('should close the dropdown when click on SelectContent and open = true', () => {
      const { getByTestId } = renderOpenedSelect(<Select options={[]} />)

      const optionsContainer = getByTestId('options-container')

      fireEvent.click(getByTestId('select-content'))
      expect(optionsContainer).toHaveAttribute('data-open', 'false')
    })

    it('should display all the options', () => {
      const { queryAllByTestId } = render(<Select options={longData} />)

      expect(queryAllByTestId('option-container')).toHaveLength(longData.length)
    })

    // it('should render a visible reset icon if no canReset props given', () => {
    //   const { queryByTestId } = render(
    //     <Select options={longData} value={longData[0].value} />
    //   )
    //
    //   const resetIcon = queryByTestId('select-reset-icon')
    //
    //   expect(resetIcon).toBeTruthy()
    //   expect(resetIcon).toHaveAttribute('data-visible', 'true')
    // })
    //
    // it('should render a hidden reset icon if no canReset props given and no value given', () => {
    //   const { queryByTestId } = render(<Select options={longData} />)
    //
    //   const resetIcon = queryByTestId('select-reset-icon')
    //
    //   expect(resetIcon).toBeTruthy()
    //   expect(resetIcon).toHaveAttribute('data-visible', 'false')
    // })

    it('should render no reset icon if canReset = false', () => {
      const { queryByTestId } = render(
        <Select options={longData} canReset={false} />
      )

      const resetIcon = queryByTestId('select-reset-icon')

      expect(resetIcon).toBeFalsy()
    })
  })

  // describe('UI: filterable', () => {
  //   it('should render an input', () => {
  //     const { queryByTestId } = render(<Select options={longData} filterable />)
  //     expect(queryByTestId('select-input')).toBeTruthy()
  //   })
  //
  //   it('should render placeholder inside input', () => {
  //     const { queryByTestId } = render(
  //       <Select
  //         options={longData}
  //         filterable
  //         placeholder="Placeholder test content"
  //       />
  //     )
  //
  //     expect(queryByTestId('select-input')).toHaveAttribute(
  //       'placeholder',
  //       'Placeholder test content'
  //     )
  //   })
  //
  //   it('should display all the options if search is empty', () => {
  //     const { queryAllByTestId } = renderOpenedSelect(
  //       <Select options={longData} filterable />
  //     )
  //
  //     expect(queryAllByTestId('option-container')).toHaveLength(longData.length)
  //   })
  //
  //   it('should display filtered options if search is not empty', () => {
  //     const { queryByTestId, queryAllByTestId } = renderOpenedSelect(
  //       <Select options={longData} filterable />
  //     )
  //
  //     fireEvent.change(queryByTestId('select-input') as Element, {
  //       target: { value: 'ann' },
  //     })
  //     const options = queryAllByTestId('option-container')
  //     expect(options).toHaveLength(2)
  //     expect(options[0].textContent).toEqual('Annecy')
  //     expect(options[1].textContent).toEqual('Villeurbanne')
  //   })
  // })

  describe('Interaction: not multi', () => {
    it('should close the dropdown when click on an option', () => {
      const { getAllByTestId, getByTestId } = renderOpenedSelect(
        <Select options={longData} filterable />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(getByTestId('options-container')).toHaveAttribute(
        'data-open',
        'false'
      )
    })

    it('should return option in simple format if no value given and no valueFormat given', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select options={longData} filterable onChange={spyOnChange} />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith(longData[3].value))
    })

    it('should return option in full format if valueFormat = "full"', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          onChange={spyOnChange}
          valueFormat="full"
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith(longData[3])).toBe(true)
    })

    it('should return option in full format if value is in full format and no valueFormat given', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          onChange={spyOnChange}
          value={longData[0]}
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith(longData[3])).toBe(true)
    })

    it('should return option in simple format if value is in full format and valueFormat = "simple"', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          onChange={spyOnChange}
          value={longData[0]}
          valueFormat="simple"
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith(longData[3].value)).toBe(true)
    })
  })

  describe('Interaction: multi', () => {
    it('should not close the dropdown when click on an option', () => {
      const { getAllByTestId, getByTestId } = renderOpenedSelect(
        <Select options={longData} filterable multi />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(getByTestId('options-container')).toHaveAttribute(
        'data-open',
        'true'
      )
    })

    it('should return an array with only this option in simple format if no value given an no valueFormat given', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select options={longData} filterable multi onChange={spyOnChange} />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith([longData[3].value])).toBe(true)
    })

    it('should return an array with only this option in full format if no value given and valueFormat = "full"', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          multi
          onChange={spyOnChange}
          valueFormat="full"
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith([longData[3]])).toBe(true)
    })

    it('should return an array with the current values and this option in simple format if current values are in simple format and no valueFormat given', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          multi
          onChange={spyOnChange}
          value={[longData[2].value]}
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(
        spyOnChange.calledWith([longData[2].value, longData[3].value])
      ).toBe(true)
    })

    it('should return an array with the current values and this option in full format if current values are in full format and no valueFormat given', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          multi
          onChange={spyOnChange}
          value={[longData[2]]}
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith([longData[2], longData[3]])).toBe(true)
    })

    it('should return an array with the current values and this option in full format if current values are in simple format and valueFormat = "full"', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          multi
          onChange={spyOnChange}
          value={[longData[2].value]}
          valueFormat="full"
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith([longData[2], longData[3]])).toBe(true)
    })

    it('should return an empty array if click on an option already selected in simple format', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          multi
          onChange={spyOnChange}
          value={[longData[3].value]}
          valueFormat="full"
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith([])).toBe(true)
    })

    it('should return an empty array if click on an option already selected in full format', () => {
      const spyOnChange = sinon.spy()
      const { getAllByTestId } = renderOpenedSelect(
        <Select
          options={longData}
          filterable
          multi
          onChange={spyOnChange}
          value={[longData[3]]}
          valueFormat="full"
        />
      )

      fireEvent.click(getAllByTestId('option-container')[3])
      expect(spyOnChange.calledOnce).toBe(true)
      expect(spyOnChange.calledWith([])).toBe(true)
    })
  })
})
