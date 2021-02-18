import styled from 'styled-components'

import { textStyles } from '../Text'
import { theme } from '../theme'

export const LabelContainer = styled.label`
  user-select: none;
  display: flex;
  align-items: baseline;

  margin: auto 0;

  &[data-disabled='true'] {
    color: ${theme.neutralColor(400)};
  }

  [data-orientation='vertical'] > & {
    padding-bottom: 8px;
  }

  [data-orientation='horizontal'] > & {
    padding-right: 8px;
  }

  [data-orientation='horizontal-reverse'] > & {
    padding-left: 8px;
  }

  &[data-type='regular'] {
    ${textStyles.regular};
  }

  &[data-type='small'] {
    ${textStyles.small};
  }

  &[data-type='caption'] {
    ${textStyles.caption};
  }

  &[data-error='true'] {
    color: ${theme.color('error')};
  }
`

export const FieldWithLabelContainer = styled.div`
  display: flex;

  &[data-orientation='vertical'] {
    flex-direction: column;
  }

  &[data-orientation='horizontal'] {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &[data-orientation='horizontal-reverse'] {
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
  }
`

export const LabelElementRightContainer = styled.div`
  margin-left: 8px;
`
