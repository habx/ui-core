import { render, within, act, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import { Modal } from './index'

jest.useFakeTimers()

describe('Modal component', () => {
  describe('with react node children', () => {
    it('should not render if not opened once', () => {
      const { queryByTestId } = render(
        <Modal onClose={() => null}>
          <div data-testid="content">CONTENT</div>
        </Modal>
      )

      const modalContainer = queryByTestId('modal-container')

      expect(modalContainer).toBeNull()
    })

    it('should render if opened once', () => {
      const { queryByTestId, getByTestId } = render(
        <Modal
          onClose={() => null}
          triggerElement={
            <button data-testid="modal-trigger-element">show</button>
          }
        >
          <div data-testid="content">CONTENT</div>
        </Modal>
      )

      fireEvent.click(getByTestId('modal-trigger-element'))
      fireEvent.click(getByTestId('modal-overlay'))

      const modalContainer = queryByTestId('modal-container') as HTMLElement

      expect(modalContainer).toBeTruthy()
      expect(within(modalContainer).queryByTestId('content')).toBeTruthy()
    })

    it('should not render if not opened once', () => {
      const { queryByTestId } = render(
        <Modal onClose={() => null}>
          <div data-testid="content">CONTENT</div>
        </Modal>
      )

      const modalContainer = queryByTestId('modal-container')

      expect(modalContainer).toBeNull()
    })
  })

  describe('with render props children', () => {
    it('should have state="closed" if modal is closed', () => {
      const spyChildren = sinon.spy()

      render(
        <Modal onClose={() => null} open={false}>
          {spyChildren}
        </Modal>
      )

      expect(spyChildren.lastCall.args[0].state).toEqual('closed')
    })

    it('should have state = "opening" if modal is mounted with open=true"', () => {
      const spyChildren = sinon.spy()

      render(
        <Modal onClose={() => null} open>
          {spyChildren}
        </Modal>
      )

      expect(spyChildren.lastCall.args[0].state).toEqual('opening')
    })

    it('should have state="opened" if opened for more than 1 second"', () => {
      const spyChildren = sinon.spy()
      render(
        <Modal onClose={() => null} open>
          {spyChildren}
        </Modal>
      )

      act(() => {
        jest.advanceTimersByTime(2000)
      })

      expect(spyChildren.lastCall.args[0].state).toEqual('opened')
    })

    it('should have state="closing" if open just switched to "false"', () => {
      const spyChildren = sinon.spy()

      const { rerender } = render(
        <Modal onClose={() => null} open>
          {spyChildren}
        </Modal>
      )

      act(() => {
        jest.advanceTimersByTime(1000)
      })

      rerender(
        <Modal onClose={() => null} open={false}>
          {spyChildren}
        </Modal>
      )

      expect(spyChildren.lastCall.args[0].state).toEqual('closing')
    })
  })
})
