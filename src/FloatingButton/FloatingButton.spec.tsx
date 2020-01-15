import { render, within, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import Icon from '../Icon'

import FloatingButton from './FloatingButton'

describe('FloatingButton component', () => {
  it('should display the right label', () => {
    const { getByTestId } = render(
      <FloatingButton>Custom label</FloatingButton>
    )

    expect(getByTestId('label-container').textContent).toEqual('Custom label')
  })

  it('should display element left', () => {
    const { queryAllByTestId } = render(
      <FloatingButton
        elementLeft={<Icon data-testid="face-icon" icon="face" />}
      >
        Label
      </FloatingButton>
    )

    const leftIconContainer = queryAllByTestId('element-left-container')

    expect(leftIconContainer).toHaveLength(1)
    expect(queryAllByTestId('element-right-container')).toHaveLength(0)
    expect(
      within(leftIconContainer[0]).queryAllByTestId('face-icon')
    ).toHaveLength(1)
  })

  it('should display element right', () => {
    const { queryAllByTestId } = render(
      <FloatingButton
        elementRight={<Icon data-testid="face-icon" icon="face" />}
      >
        Label
      </FloatingButton>
    )

    const rightIconContainer = queryAllByTestId('element-right-container')

    expect(rightIconContainer).toHaveLength(1)
    expect(queryAllByTestId('element-left-container')).toHaveLength(0)
    expect(
      within(rightIconContainer[0]).queryAllByTestId('face-icon')
    ).toHaveLength(1)
  })

  it('should display no side element', () => {
    const { queryAllByTestId } = render(<FloatingButton>Label</FloatingButton>)

    expect(queryAllByTestId('element-left-container')).toHaveLength(0)
    expect(queryAllByTestId('element-right-container')).toHaveLength(0)
  })

  it('should call the onClick property when clicked', () => {
    const spyOnChange = sinon.spy()
    const { container } = render(
      <FloatingButton onClick={spyOnChange}>Label</FloatingButton>
    )

    fireEvent.click(container.firstChild as Element)

    expect(spyOnChange.calledOnce).toBe(true)
  })
})
