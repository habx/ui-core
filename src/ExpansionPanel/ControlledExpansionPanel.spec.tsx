import { render, within, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import * as validityCheck from '../_internal/validityCheck'
import { ControlledExpansionPanelItem } from '../ExpansionPanelItem'

import { ExpansionPanel } from './index'
import '@testing-library/jest-dom/extend-expect'

jest.useFakeTimers()
const sinonSandbox = sinon.createSandbox()

describe('ControlledExpansionPanel component', () => {
  afterEach(() => {
    sinonSandbox.restore()
  })

  it('should render each ControlledExpansionPanelItem as closed', async () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ControlledExpansionPanelItem />
        <ControlledExpansionPanelItem />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    expect(items).toHaveLength(2)
    expect(
      within(items[0]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'closed')
    expect(
      within(items[1]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'closed')
  })

  it('should not close the ControlledExpansionPanelItem when click on another one and no multiOpen given', () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ControlledExpansionPanelItem />
        <ControlledExpansionPanelItem open />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[0]).getByTestId('expansion-panel-item-title-bar')
    )

    expect(
      within(items[1]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'opening')
  })

  it('should open the ControlledExpansionPanelItem if it has open: true', () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ControlledExpansionPanelItem open />
        <ControlledExpansionPanelItem />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    expect(
      within(items[0]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'opening')
  })

  it("should call the ControlledExpansionPanelItem onToggle props after click on it's title bar", () => {
    const spyOnToggle = sinon.spy()

    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ControlledExpansionPanelItem onToggle={spyOnToggle} />
        <ControlledExpansionPanelItem />
      </ExpansionPanel>
    )
    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[0]).getByTestId('expansion-panel-item-title-bar')
    )

    expect(spyOnToggle.calledOnce).toBe(true)
  })

  it('should not log a warning if ControlledExpansionPanelItem is called with an ExpansionPanel parent', () => {
    const logWarnStub = sinonSandbox.stub(validityCheck, 'logWarn')
    render(
      <ExpansionPanel>
        <ControlledExpansionPanelItem />
      </ExpansionPanel>
    )

    expect(logWarnStub.notCalled).toBe(true)
  })

  it('should log a warning if ControlledExpansionPanelItem is called without an ExpansionPanel parent', () => {
    const logWarnStub = sinonSandbox.stub(validityCheck, 'logWarn')
    render(<ControlledExpansionPanelItem />)

    expect(logWarnStub.called).toBe(true)
  })
})
