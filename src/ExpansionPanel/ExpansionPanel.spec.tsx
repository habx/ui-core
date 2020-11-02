import { render, within, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import * as validityCheck from '../_internal/validityCheck'
import { ExpansionPanelItem } from '../ExpansionPanelItem'

import { ExpansionPanel } from './index'
import '@testing-library/jest-dom/extend-expect'

jest.useFakeTimers()
const sinonSandbox = sinon.createSandbox()

describe('ExpansionPanel component', () => {
  afterEach(() => {
    sinonSandbox.restore()
  })

  it('should render each ExpansionPanelItem as closed', async () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ExpansionPanelItem />
        <ExpansionPanelItem />
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

  it("should open the ExpansionPanelItem when click on it's title bar and leave the other closed", () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ExpansionPanelItem />
        <ExpansionPanelItem />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[1]).getByTestId('expansion-panel-item-title-bar')
    )

    expect(
      within(items[0]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'closed')

    expect(
      within(items[1]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'opening')
  })

  it("should close the ExpansionPanelItem when open and click on it's title bar", () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ExpansionPanelItem />
        <ExpansionPanelItem />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[1]).getByTestId('expansion-panel-item-title-bar')
    )

    fireEvent.click(
      within(items[1]).getByTestId('expansion-panel-item-title-bar')
    )

    expect(
      within(items[1]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'closed')
  })

  it('should close the ExpansionPanelItem when click on another one and no multiOpen given', () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ExpansionPanelItem />
        <ExpansionPanelItem />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[1]).getByTestId('expansion-panel-item-title-bar')
    )

    fireEvent.click(
      within(items[0]).getByTestId('expansion-panel-item-title-bar')
    )

    expect(
      within(items[1]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'closed')
  })

  it('should not close the ExpansionPanelItem when click on another one and multiOpen = true', () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel multiOpen>
        <ExpansionPanelItem />
        <ExpansionPanelItem />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[1]).getByTestId('expansion-panel-item-title-bar')
    )

    fireEvent.click(
      within(items[0]).getByTestId('expansion-panel-item-title-bar')
    )

    expect(
      within(items[1]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'opening')
  })

  it("should close the ExpansionPanelItem but not the others when open and click on it's title bar (multiOpen: true)", () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel multiOpen>
        <ExpansionPanelItem />
        <ExpansionPanelItem />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[0]).getByTestId('expansion-panel-item-title-bar')
    )

    fireEvent.click(
      within(items[1]).getByTestId('expansion-panel-item-title-bar')
    )

    fireEvent.click(
      within(items[0]).getByTestId('expansion-panel-item-title-bar')
    )

    expect(
      within(items[0]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'closed')

    expect(
      within(items[1]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'opening')
  })

  it('should call the ExpansionPanelItem children render props with state: closed by default', () => {
    const spyChildren = sinon.spy()
    render(
      <ExpansionPanel>
        <ExpansionPanelItem>{spyChildren}</ExpansionPanelItem>
        <ExpansionPanelItem />
      </ExpansionPanel>
    )

    expect(spyChildren.lastCall.args[0].state).toEqual('closed')
  })

  it("should call the ExpansionPanelItem children render props with state: opening after click on it's title bar", () => {
    const spyChildren = sinon.spy()

    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ExpansionPanelItem>{spyChildren}</ExpansionPanelItem>
        <ExpansionPanelItem />
      </ExpansionPanel>
    )
    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[0]).getByTestId('expansion-panel-item-title-bar')
    )
    expect(spyChildren.lastCall.args[0].state).toEqual('opening')
  })

  it('should open the ExpansionPanelItem if it has open: true', () => {
    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ExpansionPanelItem open />
        <ExpansionPanelItem />
      </ExpansionPanel>
    )

    const items = queryAllByTestId('expansion-panel-item')

    expect(
      within(items[0]).getByTestId('expansion-panel-item-content')
    ).toHaveAttribute('data-state', 'opening')
  })

  it("should call the ExpansionPanelItem onToggle props after click on it's title bar", () => {
    const spyOnToggle = sinon.spy()

    const { queryAllByTestId } = render(
      <ExpansionPanel>
        <ExpansionPanelItem onToggle={spyOnToggle} />
        <ExpansionPanelItem />
      </ExpansionPanel>
    )
    const items = queryAllByTestId('expansion-panel-item')

    fireEvent.click(
      within(items[0]).getByTestId('expansion-panel-item-title-bar')
    )

    expect(spyOnToggle.calledOnce).toBe(true)
  })

  it('should not log a warning if ExpansionPanelItem is called with an ExpansionPanel parent', () => {
    const logWarnStub = sinonSandbox.stub(validityCheck, 'logWarn')
    render(
      <ExpansionPanel>
        <ExpansionPanelItem />
      </ExpansionPanel>
    )

    expect(logWarnStub.notCalled).toBe(true)
  })

  it('should log a warning if ExpansionPanelItem is called without an ExpansionPanel parent', () => {
    const logWarnStub = sinonSandbox.stub(validityCheck, 'logWarn')
    render(<ExpansionPanelItem />)

    expect(logWarnStub.called).toBe(true)
  })
})
