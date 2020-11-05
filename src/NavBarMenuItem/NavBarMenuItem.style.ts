import styled from 'styled-components'

export const NavBarMenuItemContainer = styled.div`
  &[data-bottom='true'] {
    margin-top: auto;
  }

  &[data-bottom='true'] + [data-bottom='true'] {
    margin-top: initial;
  }
`
