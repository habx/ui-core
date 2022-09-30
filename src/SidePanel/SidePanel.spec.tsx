import { render, within, act, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import { SidePanel } from './index'

jest.useFakeTimers()

describe('SidePanel component', () => {
  describe('with react node children', () => {
    it('should not render if not opened once', () => {
      const { queryByTestId } = render(
        <SidePanel onClose={() => null}>
          <div data-testid="content">CONTENT</div>
        </SidePanel>
      )

      const modalContainer = queryByTestId('modal-container')

      expect(modalContainer).toBeNull()
    })

    it('should render if opened once', () => {
      const { queryByTestId, getByTestId } = render(
        <SidePanel
          onClose={() => null}
          triggerElement={
            <button data-testid="modal-trigger-element">show</button>
          }
        >
          <div data-testid="content">CONTENT</div>
        </SidePanel>
      )

      fireEvent.click(getByTestId('modal-trigger-element'))
      fireEvent.click(getByTestId('modal-overlay'))

      const modalContainer = queryByTestId('modal-container') as HTMLElement

      expect(modalContainer).toBeTruthy()
      expect(within(modalContainer).queryByTestId('content')).toBeTruthy()
    })

    it('should not render if not opened once', () => {
      const { queryByTestId } = render(
        <SidePanel onClose={() => null}>
          <div data-testid="content">CONTENT</div>
        </SidePanel>
      )

      const modalContainer = queryByTestId('modal-container')

      expect(modalContainer).toBeNull()
    })
  })

  describe('with render props children', () => {
    it('should not call children if modal is closed and has never been opened', () => {
      const spyChildren = sinon.spy()

      render(
        <SidePanel onClose={() => null} open={false}>
          {spyChildren}
        </SidePanel>
      )

      expect(spyChildren.callCount).toEqual(0)
    })

    it('should have state = "opening" if modal is mounted with open=true"', () => {
      const spyChildren = sinon.spy()

      render(
        <SidePanel onClose={() => null} open>
          {spyChildren}
        </SidePanel>
      )

      expect(spyChildren.lastCall.args[0].state).toEqual('opening')
    })

    it('should have state="opened" if opened for more than 1 second"', () => {
      const spyChildren = sinon.spy()
      render(
        <SidePanel onClose={() => null} open>
          {spyChildren}
        </SidePanel>
      )

      act(() => {
        jest.advanceTimersByTime(2000)
      })

      expect(spyChildren.lastCall.args[0].state).toEqual('opened')
    })

    it('should have state="closing" if open just switched to "false"', () => {
      const spyChildren = sinon.spy()

      const { rerender } = render(
        <SidePanel onClose={() => null} open>
          {spyChildren}
        </SidePanel>
      )

      act(() => {
        jest.advanceTimersByTime(1000)
      })

      rerender(
        <SidePanel onClose={() => null} open={false}>
          {spyChildren}
        </SidePanel>
      )

      expect(spyChildren.lastCall.args[0].state).toEqual('closing')
    })
  })
})
