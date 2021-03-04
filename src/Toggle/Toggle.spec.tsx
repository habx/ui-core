import { render, fireEvent } from '@testing-library/react'
import * as React from 'react'

import { Toggle } from './index'

const Component = ({ initialState = false }) => {
  const [value, setValue] = React.useState(initialState)

  return (
    <Toggle
      label="Label"
      checked={value}
      onChange={(event: any) => setValue(event.target.checked)}
    />
  )
}

const setup = (initialState?: boolean) => {
  const component = render(<Component initialState={initialState} />)
  const toggle = component.getByTestId('toggle-input') as HTMLInputElement
  const label = component.getByTestId('toggle-label')

  return { toggle, component, label }
}

describe('Toggle', () => {
  it('should update its state when clicked', () => {
    const { toggle } = setup()

    fireEvent.click(toggle)
    expect(toggle.checked).toBe(true)
    fireEvent.click(toggle)
    expect(toggle.checked).toBe(false)
  })

  it('should update its state when its label is clicked', () => {
    const { toggle, label } = setup()

    fireEvent.click(label)
    expect(toggle.checked).toBe(true)
    fireEvent.click(label)
    expect(toggle.checked).toBe(false)
  })
})
