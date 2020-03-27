import styled from 'styled-components'

import palette from '../palette/palette'
import theme from '../theme/theme'
import { TooltipTriggerContainer } from '../Tooltip/Tooltip.style'

export const BreadcrumbItemContainer = styled.li`
  list-style-type: none;
  user-select: none;

  margin-right: 4px;

  &,
  ${TooltipTriggerContainer} {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
  }

  font-family: ${theme.font()};
  color: ${palette.darkBlue[700]};

  padding: 6px 12px;
  border-radius: 2px;

  &[data-size='small'] {
    padding: 4px 12px;

    &,
    ${TooltipTriggerContainer} {
      font-size: 12px;
    }
  }
  &[data-size='large'],
  &[data-size='large'] ${TooltipTriggerContainer} {
    font-size: 18px;
  }

  &:last-child {
    max-width: initial;
    overflow: visible;
    color: ${palette.darkBlue[900]};
  }

  &[data-interactive='true']:not(:last-child) {
    &:hover {
      cursor: pointer;
      background: ${palette.darkBlue[200]};
    }
  }
`
