import styled from 'styled-components'

import palette from '../palette'
import Text from '../Text'
import theme from '../theme'

export const MenuSectionContainer = styled.div`
  margin: 12px 0;
  padding: 24px 0 12px 0;
  background-color: ${palette.blue[100]};
`

export const MenuSectionLabelContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 24px 8px 24px;
`

export const MenuSectionLabel = styled(Text)``

export const IconContainer = styled.div`
  font-size: 0.9em;
  display: flex;
  margin-top: 1px;
  color: ${theme.color('secondary')};

  &[data-position='left'] {
    margin-right: 8px;
  }

  &[data-position='right'] {
    margin-left: 8px;
  }

  & > svg {
    height: 100%;
  }
`
