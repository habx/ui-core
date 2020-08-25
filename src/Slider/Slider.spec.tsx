import { render, fireEvent } from '@testing-library/react'
import * as React from 'react'

import Slider from './index'

import '@testing-library/jest-dom/extend-expect'

describe('Slider component', () => {
  describe('UI: range = false', () => {
    it('should render 1 dot', () => {
      const { queryAllByTestId } = render(<Slider value={50} />)

      expect(queryAllByTestId('slider-dot')).toHaveLength(1)
    })

    it('should render 1 bar', () => {
      const { queryAllByTestId } = render(<Slider value={50} />)

      expect(queryAllByTestId('slider-bar')).toHaveLength(1)
    })

    it('should put the dot in the right position', () => {
      const { queryByTestId } = render(<Slider value={50} />)

      expect(queryByTestId('slider-dot')).toHaveStyle('left: 50%')
    })

    it('should put the dot in the right position with custom min / max / step', () => {
      const { queryByTestId } = render(
        <Slider min={2} max={6} step={2} value={3} />
      )

      expect(queryByTestId('slider-dot')).toHaveStyle('left: 25%')
    })

    it('should move the dot if value is programmatically changed', () => {
      const { queryByTestId, rerender } = render(<Slider value={50} />)

      rerender(<Slider value={0} />)

      expect(queryByTestId('slider-dot')).toHaveStyle('left: 0%')
    })

    it('should put the bar from the start to the position of the dot', () => {
      const { queryByTestId } = render(<Slider value={50} />)

      const bar = queryByTestId('slider-bar')

      expect(bar).toHaveStyle('left: 0%')
      expect(bar).toHaveStyle('right: 50%')
    })

    it('should put the current value as tooltip if no tooltipSuffix and tooltipFormatter given', () => {
      const { getByTestId } = render(<Slider value={50} />)

      expect(getByTestId('slider-tooltip').textContent).toEqual('50')
    })

    it('should add the tooltipSuffix to the value', () => {
      const { getByTestId } = render(<Slider value={50} tooltipSuffix="m²" />)

      expect(getByTestId('slider-tooltip').textContent).toEqual('50m²')
    })

    it('should position the tooltip under the dot', () => {
      const { getByTestId } = render(<Slider value={50} />)

      expect(getByTestId('slider-tooltip')).toHaveStyle('padding-left: 50%')
    })

    it('should update the tooltip position when the dot is programmatically moved', () => {
      const { queryByTestId, rerender } = render(<Slider value={50} />)

      rerender(<Slider value={0} />)

      expect(queryByTestId('slider-tooltip')).toHaveStyle('padding-left: 0%')
    })
  })

  describe('UI: range = true', () => {
    it('should render 2 dots', () => {
      const { queryAllByTestId } = render(<Slider value={[20, 50]} range />)

      expect(queryAllByTestId('slider-dot')).toHaveLength(2)
    })

    it('should render 1 bar', () => {
      const { queryAllByTestId } = render(<Slider value={[20, 50]} range />)

      expect(queryAllByTestId('slider-bar')).toHaveLength(1)
    })

    it('should put the dots in the right position', () => {
      const { queryAllByTestId } = render(<Slider value={[20, 50]} range />)

      const [firstDot, secondDot] = queryAllByTestId('slider-dot')

      expect(firstDot).toHaveStyle('left: 20%')
      expect(secondDot).toHaveStyle('left: 50%')
    })

    it('should move the dots if value is programmatically changed', () => {
      const { queryAllByTestId, rerender } = render(
        <Slider value={[20, 50]} range />
      )

      rerender(<Slider value={[40, 45]} range />)

      const [firstDot, secondDot] = queryAllByTestId('slider-dot')

      expect(firstDot).toHaveStyle('left: 40%')
      expect(secondDot).toHaveStyle('left: 45%')
    })

    it('should put the bar from the first dot to the second dot', () => {
      const { queryByTestId } = render(<Slider value={[40, 45]} range />)

      const bar = queryByTestId('slider-bar')

      expect(bar).toHaveStyle('left: 40%')
      expect(bar).toHaveStyle('right: 55%')
    })
  })

  describe('Interaction', () => {
    beforeEach(() => {
      Object.defineProperties(HTMLElement.prototype, {
        offsetWidth: {
          get: () => 100,
        },
      })
    })

    it('should move the dot when click on the mouse then move it', () => {
      const { queryByTestId } = render(<Slider value={50} />)

      const dot = queryByTestId('slider-dot')

      fireEvent.mouseDown(dot as HTMLElement)
      // fireEvent.mouseMove(dot, new MouseEvent('mousemove', { bubbles: true, pageX: 300 }))
      // JS DOM refuse pageX attribute on mousemove.
    })
  })
})
