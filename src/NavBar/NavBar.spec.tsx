import { render } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import * as validityCheck from '../_internal/validityCheck'
import { NavBarItem } from '../NavBarItem'

import { NavBar } from './index'
import '@testing-library/jest-dom/extend-expect'

jest.useFakeTimers()
const sinonSandbox = sinon.createSandbox()

describe('NavBar component', () => {
  afterEach(() => {
    sinonSandbox.restore()
  })

  it('should render each NavBarItem', async () => {
    const { queryAllByTestId } = render(
      <NavBar>
        <NavBarItem />
        <NavBarItem />
      </NavBar>
    )

    expect(queryAllByTestId('nav-bar-item')).toHaveLength(2)
  })

  it('should not log a warning if NavBarItem is called with an NavBar parent', () => {
    const logWarnStub = sinonSandbox.stub(validityCheck, 'logWarn')
    render(
      <NavBar>
        <NavBarItem />
      </NavBar>
    )

    expect(logWarnStub.notCalled).toBe(true)
  })

  it('should log a warning if NavBarItem is called without a NavBar parent', () => {
    const logWarnStub = sinonSandbox.stub(validityCheck, 'logWarn')
    render(<NavBarItem />)

    expect(logWarnStub.calledOnce).toBe(true)
  })
})
