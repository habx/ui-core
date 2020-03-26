import { render, fireEvent, act } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import withTriggerElement from './withTriggerElement'

jest.useFakeTimers()

describe('withTriggerElement high order component', () => {
  it('should pass open and onClose untouched if not triggerElement is given', () => {
    const spyOnClose = sinon.spy(() => {})
    const SpyComponent = sinon.spy((props) => <div>{props.children}</div>)
    const WrappedComponent = withTriggerElement()(SpyComponent)

    render(<WrappedComponent onClose={spyOnClose} open={true} />)

    const { onClose, open } = SpyComponent.lastCall.args[0]

    expect(onClose).toEqual(spyOnClose)
    expect(open).toEqual(true)
  })

  it('should render the triggerElement', () => {
    const SpyComponent = sinon.spy((props) => <div>{props.children}</div>)
    const SpyButton = sinon.spy((props) => <button {...props} />)
    const WrappedComponent = withTriggerElement()(SpyComponent)

    const { getAllByTestId } = render(
      <WrappedComponent
        triggerElement={
          <SpyButton data-testid="custom-trigger-element">
            Click on me
          </SpyButton>
        }
      />
    )

    expect(getAllByTestId('custom-trigger-element')).toHaveLength(1)
  })

  it('before click on the triggerElement, should pass open = false to the main component', () => {
    const SpyComponent = sinon.spy((props) => <div>{props.children}</div>)
    const SpyButton = sinon.spy((props) => <button {...props} />)
    const WrappedComponent = withTriggerElement()(SpyComponent)

    render(
      <WrappedComponent
        triggerElement={
          <SpyButton data-testid="custom-trigger-element">
            Click on me
          </SpyButton>
        }
      />
    )

    expect(SpyComponent.lastCall.args[0].open).toBe(false)
  })

  it('when click on the triggerElement, should pass open = true to the main component', () => {
    const SpyComponent = sinon.spy((props) => <div>{props.children}</div>)
    const SpyButton = sinon.spy((props) => <button {...props} />)
    const WrappedComponent = withTriggerElement()(SpyComponent)

    const { getByTestId } = render(
      <WrappedComponent
        triggerElement={
          <SpyButton data-testid="custom-trigger-element">
            Click on me
          </SpyButton>
        }
      />
    )

    fireEvent.click(getByTestId('custom-trigger-element'))

    expect(SpyComponent.lastCall.args[0].open).toBe(true)
  })

  it("should call props.onClose when the main component call it's onClose property", () => {
    const spyOnClose = sinon.spy()
    const SpyComponent = sinon.spy((props) => {
      React.useEffect(() => {
        props.onClose(null)
      })

      return <div>{props.children}</div>
    })

    const SpyButton = sinon.spy((props) => <button {...props} />)
    const WrappedComponent = withTriggerElement()(SpyComponent)

    render(
      <WrappedComponent
        onClose={spyOnClose}
        triggerElement={
          <SpyButton data-testid="custom-trigger-element">
            Click on me
          </SpyButton>
        }
      />
    )

    act(() => {
      jest.advanceTimersByTime(100)
    })

    expect(spyOnClose.calledOnce).toBe(true)
  })
})
