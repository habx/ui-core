import styled from 'styled-components'

export const NavBarMenuItemContainer = styled.div`
  &[data-bottom='true'] {
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0px;
  }

  &[data-bottom='true'] + [data-bottom='true'] {
    margin-top: initial;
    border-top: none;
  }
`
