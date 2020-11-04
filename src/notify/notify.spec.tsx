import { render, within, act } from '@testing-library/react'
import * as React from 'react'

import { ANIMATION_DURATIONS } from '../animations'
import { Provider } from '../Provider'

import { notify } from './index'

jest.useFakeTimers()

const MESSAGE_1 = 'test message 1'
const MESSAGE_2 = 'test message 2'

describe('notify function', () => {
  it('should display no notification if not called', () => {
    const { queryAllByTestId } = render(<Provider />)

    expect(queryAllByTestId('notification-container')).toHaveLength(0)
  })

  it('should display one notification with message if called once', () => {
    const { queryAllByTestId } = render(<Provider />)

    act(() => {
      notify(MESSAGE_1)
    })

    const notifications = queryAllByTestId('notification-container')
    expect(notifications).toHaveLength(1)
    expect(
      within(notifications[0]).getByTestId('notification-content').textContent
    ).toEqual(MESSAGE_1)
  })

  it('should display two notifications in chronological order if called twice', () => {
    const { getAllByTestId } = render(<Provider />)

    act(() => {
      notify(MESSAGE_1)
      notify(MESSAGE_2)
    })

    const notifications = getAllByTestId('notification-container')
    expect(notifications).toHaveLength(2)
    expect(
      within(notifications[0]).getByTestId('notification-content').textContent
    ).toEqual(MESSAGE_1)
    expect(
      within(notifications[1]).getByTestId('notification-content').textContent
    ).toEqual(MESSAGE_2)
  })

  it('should remove notification after timeout', () => {
    const { queryAllByTestId, rerender } = render(<Provider />)

    const duration = 200

    act(() => {
      notify(MESSAGE_1, { duration })
    })

    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATIONS.l + duration + 5000)
    })

    rerender(<Provider />)
    const notifications = queryAllByTestId('notification-container')
    expect(notifications).toHaveLength(0)
  })
})
