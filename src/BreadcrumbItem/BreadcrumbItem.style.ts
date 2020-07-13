import styled from 'styled-components'

import palette from '../palette/palette'
import theme from '../theme/theme'

export const BreadcrumbItemContainer = styled.li`
  list-style-type: none;
  user-select: none;

  margin-right: 4px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-family: ${theme.font()};
  font-weight: normal;

  padding: 6px 12px;
  border-radius: 2px;

  transition: background ease-in-out 150ms;

  &[data-size='small'] {
    padding: 4px 12px;
    font-size: 12px;
  }

  &[data-size='large'] {
    font-size: 18px;
  }

  &:last-child {
    max-width: initial;
    overflow: visible;
    color: ${palette.darkBlue[900]};
  }
  &:not(:last-child) {
    color: ${palette.darkBlue[700]};
  }

  &[data-interactive='true']:not(:last-child) {
    &:hover {
      cursor: pointer;
      background: ${palette.darkBlue[200]};
    }
  }
`
