import { render, within, act, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import { LightBox } from './index'

jest.useFakeTimers()

describe('LightBox component', () => {
  describe('with react node children', () => {
    it('should not render if not opened once', () => {
      const { queryByTestId } = render(
        <LightBox onClose={() => null}>
          <div data-testid="content">CONTENT</div>
        </LightBox>
      )

      const lightBoxContainer = queryByTestId('lightbox-container')

      expect(lightBoxContainer).toBeNull()
    })

    it('should render if opened once', () => {
      const { queryByTestId, getByTestId } = render(
        <LightBox
          onClose={() => null}
          triggerElement={
            <button data-testid="lightbox-trigger-element">show</button>
          }
        >
          <div data-testid="content">CONTENT</div>
        </LightBox>
      )

      fireEvent.click(getByTestId('lightbox-trigger-element'))

      const lightBoxContainer = queryByTestId(
        'lightbox-container'
      ) as HTMLElement

      expect(lightBoxContainer).toBeTruthy()
      expect(within(lightBoxContainer).queryByTestId('content')).toBeTruthy()
    })

    it('should not render if not opened once', () => {
      const { queryByTestId } = render(
        <LightBox onClose={() => null}>
          <div data-testid="content">CONTENT</div>
        </LightBox>
      )

      const lightBoxContainer = queryByTestId('lightbox-container')

      expect(lightBoxContainer).toBeNull()
    })
  })

  describe('with render props children', () => {
    it('should not call children if lightbox is closed and has never been opened', () => {
      const spyChildren = sinon.spy()

      render(
        <LightBox onClose={() => null} open={false}>
          {spyChildren}
        </LightBox>
      )

      expect(spyChildren.callCount).toEqual(0)
    })

    it('should have state = "opening" if lightbox is mounted with open=true"', () => {
      const spyChildren = sinon.spy()

      render(
        <LightBox onClose={() => null} open>
          {spyChildren}
        </LightBox>
      )

      expect(spyChildren.lastCall.args[0].state).toEqual('opening')
    })

    it('should have state="opened" if opened for more than 1 second"', () => {
      const spyChildren = sinon.spy()
      render(
        <LightBox onClose={() => null} open>
          {spyChildren}
        </LightBox>
      )

      act(() => {
        jest.advanceTimersByTime(2000)
      })

      expect(spyChildren.lastCall.args[0].state).toEqual('opened')
    })

    it('should have state="closing" if open just switched to "false"', () => {
      const spyChildren = sinon.spy()

      const { rerender } = render(
        <LightBox onClose={() => null} open>
          {spyChildren}
        </LightBox>
      )

      act(() => {
        jest.advanceTimersByTime(1000)
      })

      rerender(
        <LightBox onClose={() => null} open={false}>
          {spyChildren}
        </LightBox>
      )

      expect(spyChildren.lastCall.args[0].state).toEqual('closing')
    })
  })

  describe('close icon behavior', () => {
    it('should render close icon if prop hideCloseIcon is not defined', () => {
      const spyChildren = sinon.spy()
      const { queryByTestId } = render(
        <LightBox onClose={() => null} open>
          {spyChildren}
        </LightBox>
      )

      act(() => {
        jest.advanceTimersByTime(2000)
      })

      const lightBoxContainer = queryByTestId(
        'lightbox-close-icon'
      ) as HTMLElement

      expect(lightBoxContainer).toBeTruthy()
    })

    it('should not render close icon if prop hideCloseIcon is set to true', () => {
      const spyChildren = sinon.spy()
      const { queryByTestId } = render(
        <LightBox onClose={() => null} open hideCloseIcon>
          {spyChildren}
        </LightBox>
      )

      act(() => {
        jest.advanceTimersByTime(2000)
      })

      const lightBoxContainer = queryByTestId(
        'lightbox-close-icon'
      ) as HTMLElement

      expect(lightBoxContainer).toBeFalsy()
    })
  })
})
