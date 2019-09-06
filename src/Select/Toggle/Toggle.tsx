import * as React from 'react'

import ToggleProps from './Toggle.interface'
import { ToggleContainer, ToggleContent } from './Toggle.style'

const Toggle: React.FunctionComponent<ToggleProps> = ({ state }) => (
  <ToggleContainer>
    <ToggleContent data-state={state} />
  </ToggleContainer>
)

export default Toggle
