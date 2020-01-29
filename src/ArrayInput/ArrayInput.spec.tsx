import { render, within, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import ArrayInput from './index'

jest.useFakeTimers()

const DEFAULT_ITEMS = [
  { title: 'Title 0', content: 'Content 0' },
  { title: 'Title 1', content: 'Content 1' },
]

describe('ArrayInput component', () => {
  it('should call renderItem for each item and put the result in the Item', async () => {
    const spyRenderItem = sinon.spy(({ value, index }) => (
      <div data-testid={`item-${index}`}>{value.content}</div>
    ))

    const { findAllByTestId } = render(
      <ArrayInput items={DEFAULT_ITEMS} renderItem={spyRenderItem} />
    )

    const items = await findAllByTestId('array-input-item')

    expect(spyRenderItem.calledTwice).toBe(true)
    expect(spyRenderItem.firstCall.args[0]).toEqual({
      editing: false,
      index: 0,
      value: DEFAULT_ITEMS[0],
    })

    expect(spyRenderItem.secondCall.args[0]).toEqual({
      editing: false,
      index: 1,
      value: DEFAULT_ITEMS[1],
    })

    expect(within(items[0]).getByTestId('item-0').textContent).toEqual(
      DEFAULT_ITEMS[0].content
    )

    expect(within(items[1]).getByTestId('item-1').textContent).toEqual(
      DEFAULT_ITEMS[1].content
    )
  })

  it('should call renderItemTitle for each item and put the result in the Item header', async () => {
    const spyRenderItem = sinon.spy(({ value, index }) => (
      <div data-testid={`item-title-${index}`}>{value.title}</div>
    ))

    const { findAllByTestId } = render(
      <ArrayInput items={DEFAULT_ITEMS} renderItemTitle={spyRenderItem} />
    )

    const headers = await findAllByTestId('array-input-item-header')

    expect(spyRenderItem.calledTwice).toBe(true)
    expect(spyRenderItem.firstCall.args[0]).toEqual({
      editing: false,
      index: 0,
      value: DEFAULT_ITEMS[0],
    })

    expect(spyRenderItem.secondCall.args[0]).toEqual({
      editing: false,
      index: 1,
      value: DEFAULT_ITEMS[1],
    })

    expect(within(headers[0]).getByTestId('item-title-0').textContent).toEqual(
      DEFAULT_ITEMS[0].title
    )

    expect(within(headers[1]).getByTestId('item-title-1').textContent).toEqual(
      DEFAULT_ITEMS[1].title
    )
  })

  it("should open the first item when click on it's title", async () => {
    const spyRenderItem = sinon.spy(({ value, index }) => (
      <div data-testid={`item-title-${index}`}>{value.title}</div>
    ))

    const { findAllByTestId } = render(
      <ArrayInput items={[DEFAULT_ITEMS[0]]} renderItemTitle={spyRenderItem} />
    )

    const headers = await findAllByTestId('array-input-item-header')

    fireEvent.click(headers[0])

    expect(spyRenderItem.calledTwice).toBe(true)
    expect(spyRenderItem.secondCall.args[0]).toEqual({
      editing: true,
      index: 0,
      value: DEFAULT_ITEMS[0],
    })
  })

  describe('delete features', () => {
    it('should call onDelete with position = 1 when click on the second item delete icon', async () => {
      const spyOnDelete = sinon.spy()

      const { findAllByTestId } = render(
        <ArrayInput items={DEFAULT_ITEMS} onDelete={spyOnDelete} />
      )

      const deleteIcons = await findAllByTestId('array-input-item-delete')

      expect(deleteIcons).toHaveLength(2)

      fireEvent.click(deleteIcons[1])

      expect(spyOnDelete.calledOnce).toBe(true)
      expect(spyOnDelete.lastCall.args[0]).toEqual(1)
    })

    it('should not display any delete icon if disabled = true', async () => {
      const { findAllByTestId, queryAllByTestId } = render(
        <ArrayInput items={DEFAULT_ITEMS} canBeReordered disabled />
      )

      await findAllByTestId('array-input-item')

      expect(queryAllByTestId('array-input-item-delete')).toHaveLength(0)
    })
  })

  describe('reorder features', () => {
    it('should display a reorder icon per line if canBeReordered = true', async () => {
      const { findAllByTestId } = render(
        <ArrayInput items={DEFAULT_ITEMS} canBeReordered />
      )

      const deleteIcons = await findAllByTestId('array-input-item-mode-up')

      expect(deleteIcons).toHaveLength(2)
    })

    it('should not display any reorder icon if no canBeReordered given', async () => {
      const { findAllByTestId, queryAllByTestId } = render(
        <ArrayInput items={DEFAULT_ITEMS} />
      )

      await findAllByTestId('array-input-item')

      expect(queryAllByTestId('array-input-item-move-up')).toHaveLength(0)
    })

    it('should not display any reorder icon if canBeReordered = true and disabled = true', async () => {
      const { findAllByTestId, queryAllByTestId } = render(
        <ArrayInput items={DEFAULT_ITEMS} canBeReordered disabled />
      )

      await findAllByTestId('array-input-item')

      expect(queryAllByTestId('array-input-item-move-up')).toHaveLength(0)
    })

    it('should call onReorder with oldPosition = 1 and newPosition = 0 when click on second item move up icon', async () => {
      const spyOnReorder = sinon.spy()

      const { findAllByTestId } = render(
        <ArrayInput
          items={DEFAULT_ITEMS}
          canBeReordered
          onReorder={spyOnReorder}
        />
      )

      const deleteIcons = await findAllByTestId('array-input-item-mode-up')

      fireEvent.click(deleteIcons[1])

      expect(spyOnReorder.calledOnce).toBe(true)
      expect(spyOnReorder.lastCall.args).toEqual([1, 0])
    })

    it('should not call onReorder when click on first item move up icon', async () => {
      const spyOnReorder = sinon.spy()

      const { findAllByTestId } = render(
        <ArrayInput
          items={DEFAULT_ITEMS}
          canBeReordered
          onReorder={spyOnReorder}
        />
      )

      const deleteIcons = await findAllByTestId('array-input-item-mode-up')

      fireEvent.click(deleteIcons[0])

      expect(spyOnReorder.notCalled).toBe(true)
    })
  })

  describe('append feature', () => {
    it('should call onAppend when click on add button', () => {
      const spyOnAppend = sinon.spy()

      const { getByTestId } = render(
        <ArrayInput items={DEFAULT_ITEMS} onAppend={spyOnAppend} />
      )

      fireEvent.click(getByTestId('array-input-add'))

      expect(spyOnAppend.calledOnce).toBe(true)
    })

    it('should call onAppend when click on add button and disabled = true', () => {
      const spyOnAppend = sinon.spy()

      const { getByTestId } = render(
        <ArrayInput items={DEFAULT_ITEMS} onAppend={spyOnAppend} disabled />
      )

      fireEvent.click(getByTestId('array-input-add'))

      expect(spyOnAppend.notCalled).toBe(true)
    })

    it('should open new items when added to list', async () => {
      const spyRenderItem = sinon.spy(({ value, index }) => (
        <div data-testid={`item-title-${index}`}>{value.title}</div>
      ))

      const { rerender } = render(<ArrayInput items={[DEFAULT_ITEMS[0]]} />)

      rerender(<ArrayInput items={DEFAULT_ITEMS} renderItem={spyRenderItem} />)

      expect(spyRenderItem.lastCall.args[0]).toEqual({
        editing: true,
        index: 1,
        value: DEFAULT_ITEMS[1],
      })
    })

    it('should display custom addButtonLabel if given', () => {
      const { getByTestId } = render(
        <ArrayInput items={DEFAULT_ITEMS} addButtonLabel="Custom label" />
      )

      expect(getByTestId('array-input-add').textContent).toEqual('Custom label')
    })
  })
})
