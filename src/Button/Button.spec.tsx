import { render, within, fireEvent } from '@testing-library/react'
import * as React from 'react'
import sinon from 'sinon'

import Icon from '../Icon'

import Button from './index'

describe('Button component', () => {
  it('should display the right label', () => {
    const { getByTestId } = render(<Button>Custom label</Button>)

    expect(getByTestId('label-container').textContent).toEqual('Custom label')
  })

  it('should display icon left', () => {
    const { queryAllByTestId } = render(
      <Button elemenftLeft={<Icon data-testid="face-icon" icon="face" />}>
        Label
      </Button>
    )

    const leftIconContainer = queryAllByTestId('icon-left-container')

    expect(leftIconContainer).toHaveLength(1)
    expect(queryAllByTestId('icon-right-container')).toHaveLength(0)
    expect(
      within(leftIconContainer[0]).queryAllByTestId('face-icon')
    ).toHaveLength(1)
  })

  it('should display icon right', () => {
    const { queryAllByTestId } = render(
      <Button elementRight={<Icon data-testid="face-icon" icon="face" />}>
        Label
      </Button>
    )

    const rightIconContainer = queryAllByTestId('icon-right-container')

    expect(rightIconContainer).toHaveLength(1)
    expect(queryAllByTestId('icon-left-container')).toHaveLength(0)
    expect(
      within(rightIconContainer[0]).queryAllByTestId('face-icon')
    ).toHaveLength(1)
  })

  it('should display no icon', () => {
    const { queryAllByTestId } = render(<Button>Label</Button>)

    expect(queryAllByTestId('icon-left-container')).toHaveLength(0)
    expect(queryAllByTestId('icon-right-container')).toHaveLength(0)
  })

  it('should call the onClick property when clicked', () => {
    const spyOnChange = sinon.spy()
    const { container } = render(<Button onClick={spyOnChange}>Label</Button>)

    fireEvent.click(container.firstChild as Element)

    expect(spyOnChange.calledOnce).toBe(true)
  })
})
