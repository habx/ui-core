import { render, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import { NavigationDots } from './index'

import '@testing-library/jest-dom/extend-expect'

describe('NavigationDots component', () => {
  it('should render 3 dots if size = 3', () => {
    const { getAllByTestId } = render(<NavigationDots size={3} />)

    expect(getAllByTestId('navigation-dot')).toHaveLength(3)
  })

  it('should render 5 dots if size > 5', () => {
    const { getAllByTestId } = render(<NavigationDots size={12} />)

    expect(getAllByTestId('navigation-dot')).toHaveLength(5)
  })

  it('should activate the first dot if activeDot is not defined', () => {
    const { getAllByTestId } = render(<NavigationDots size={3} />)

    const dots = getAllByTestId('navigation-dot')
    expect(dots[0]).toHaveAttribute('data-active', 'true')
    expect(dots[1]).toHaveAttribute('data-active', 'false')
    expect(dots[2]).toHaveAttribute('data-active', 'false')
  })

  it('should activate the second dot if activeDot = 1', () => {
    const { getAllByTestId } = render(<NavigationDots size={3} activeDot={1} />)

    const dots = getAllByTestId('navigation-dot')
    expect(dots[0]).toHaveAttribute('data-active', 'false')
    expect(dots[1]).toHaveAttribute('data-active', 'true')
    expect(dots[2]).toHaveAttribute('data-active', 'false')
  })

  it('should activate the third dot if size > 5 and activeDot > 2 and activeDot < size - 2', () => {
    const { getAllByTestId } = render(
      <NavigationDots size={12} activeDot={7} />
    )

    const dots = getAllByTestId('navigation-dot')
    expect(dots[2]).toHaveAttribute('data-active', 'true')
  })

  it('should render small first and last dot if size > 5 and the activeDot is in the middle', () => {
    const { getAllByTestId } = render(
      <NavigationDots size={12} activeDot={7} />
    )

    const dots = getAllByTestId('navigation-dot')
    expect(dots[0]).toHaveAttribute('data-small', 'true')
    expect(dots[dots.length - 1]).toHaveAttribute('data-small', 'true')
  })

  it('should not render small first dot if size > 5 and the activeDot = 0', () => {
    const { getAllByTestId } = render(
      <NavigationDots size={12} activeDot={0} />
    )

    const dots = getAllByTestId('navigation-dot')
    expect(dots[0]).toHaveAttribute('data-small', 'false')
  })

  it('should not render small last dot if size > 5 and the activeDot = size - 1', () => {
    const { getAllByTestId } = render(
      <NavigationDots size={12} activeDot={11} />
    )

    const dots = getAllByTestId('navigation-dot')
    expect(dots[dots.length - 1]).toHaveAttribute('data-small', 'false')
  })

  it('should call the onClickDot property with the dot index when clicked', () => {
    const spyOnChange = sinon.spy()
    const { getAllByTestId } = render(
      <NavigationDots size={12} activeDot={6} onClickDot={spyOnChange} />
    )

    const dots = getAllByTestId('navigation-dot')
    fireEvent.click(dots[1] as Element)

    expect(spyOnChange.calledOnce).toBe(true)
    expect(spyOnChange.lastCall.args[0]).toEqual(5)
  })
})
