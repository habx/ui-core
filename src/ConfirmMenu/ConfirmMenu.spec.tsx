import { act, fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import { ANIMATION_DURATIONS } from '../animations'

import { ConfirmMenu, ConfirmMenuProps } from './index'

import '@testing-library/jest-dom/extend-expect'

jest.useFakeTimers()

const InputWithConfirm = (props: ConfirmMenuProps) => {
  return (
    <div>
      <ConfirmMenu {...props}>
        <input data-testid="input" />
      </ConfirmMenu>
    </div>
  )
}

describe('Confirm Menu component', () => {
  it('should not be opened when input not focused', () => {
    const { queryByTestId } = render(<InputWithConfirm />)
    expect(queryByTestId('confirm-menu')).toBeNull()
  })

  it('should be opened when input focused', () => {
    const { queryByTestId } = render(<InputWithConfirm />)

    fireEvent.focus(queryByTestId('input') as Element)

    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATIONS.m)
    })

    expect(queryByTestId('confirm-menu')).toHaveAttribute(
      'data-state',
      'opening'
    )
  })

  it('should display 2 menu elements only', () => {
    const { queryByTestId } = render(<InputWithConfirm />)

    fireEvent.focus(queryByTestId('input') as Element)

    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATIONS.m)
    })

    expect(queryByTestId('confirm-menu')?.childElementCount).toBe(2)
  })

  it('should call onConfirm on confirm click', () => {
    const spyOnConfirm = sinon.spy()
    const { queryByTestId } = render(
      <InputWithConfirm onConfirm={spyOnConfirm} />
    )

    fireEvent.focus(queryByTestId('input') as Element)

    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATIONS.m)
    })

    fireEvent.click(queryByTestId('confirm-menu-confirm') as Element)

    expect(spyOnConfirm.calledOnce).toBeTruthy()
  })

  it('should call onClose on close click', () => {
    const spyOnClose = sinon.spy()
    const { queryByTestId } = render(<InputWithConfirm onClose={spyOnClose} />)

    fireEvent.focus(queryByTestId('input') as Element)

    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATIONS.m)
    })

    fireEvent.click(queryByTestId('confirm-menu-close') as Element)

    expect(spyOnClose.calledOnce).toBeTruthy()
  })
})
