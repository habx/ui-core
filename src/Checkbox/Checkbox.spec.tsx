import { render, fireEvent } from '@testing-library/react'
import * as React from 'react'

import Checkbox from './index'

const Container = () => {
  const [value, setValue] = React.useState<boolean>(false)
  return (
    <Checkbox
      value={value.toString()}
      onChange={e => setValue(e.target.checked)}
    >
      Label
    </Checkbox>
  )
}
describe('Checkbox component', () => {
  it('should change to true when clicked', () => {
    const checkbox = render(<Container />)
    fireEvent.click(checkbox.getByTestId('checkboxLabel') as Element)
    expect(
      (checkbox.getByTestId('checkboxInput') as HTMLInputElement).checked
    ).toBe(true)
  })
})
