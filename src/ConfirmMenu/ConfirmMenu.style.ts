import styled from 'styled-components'

import { theme } from '../theme'
import { TogglePanel } from '../TogglePanel'

export const ConfirmMenuContainer = styled(TogglePanel)`
  box-shadow: ${theme.shadow()};
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 6px;
`
