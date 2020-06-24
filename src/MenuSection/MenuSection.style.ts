import styled from 'styled-components'

import palette from '../palette'

export const MenuSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:after,
  &:before {
    content: '';
    height: 1px;
    background: ${palette.darkBlue[300]};
  }

  &:before {
    margin-bottom: 3px;
  }

  &:after {
    margin-top: 3px;
  }
`
