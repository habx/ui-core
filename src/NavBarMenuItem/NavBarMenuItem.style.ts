import styled from 'styled-components'

export const NavBarMenuItemContainer = styled.div`
  &[data-bottom='true'] {
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  &[data-bottom='true'] + [data-bottom='true'] {
    margin-top: initial;
  }
`
