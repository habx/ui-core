import styled from 'styled-components'

import zIndex from '../../_internal/zIndex'
import Background from '../../Background'
import theme from '../../theme'
import Option from '../Option'

export const MAX_HEIGHT = 300

export const OptionsContainer = styled(Background)<{
  wrapperRect: ClientRect
  maxHeight?: number
}>`
  position: fixed;
  z-index: ${zIndex.dropDowns + 1};
  pointer-events: none;

  box-shadow: ${theme.shadow('regular')};
  opacity: 0;
  overflow: hidden;
  margin-top: 12px;

  max-height: 0;
  min-width: ${({ wrapperRect }) => `${wrapperRect.width}px`};
  left: ${({ wrapperRect }) => `${wrapperRect.left}px`};

  border-radius: 4px;

  transition: max-height ease-in-out 300ms, opacity ease-in-out 300ms;

  &[data-open='true'] {
    max-height: ${({ maxHeight }) => (maxHeight || MAX_HEIGHT) + 24}px;
    opacity: 1;
    pointer-events: unset;
  }

  &[data-position='bottom'] {
    top: ${({ wrapperRect }) => `${wrapperRect.bottom}px`};
  }

  &[data-position='top'] {
    bottom: ${({ wrapperRect }) =>
      `calc(${window.innerHeight - wrapperRect.top}px + 8px)`};
  }

  & * {
    user-select: none;
  }
`

export const OptionsContent = styled.ul<{
  noMaxHeight?: boolean
  maxHeight?: number
}>`
  list-style-type: none;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  max-height: ${({ noMaxHeight, maxHeight }) =>
    noMaxHeight
      ? 'unset'
      : `${maxHeight && maxHeight < MAX_HEIGHT ? maxHeight : MAX_HEIGHT}px`};
`

export const OptionsModalContent = styled.div``

export const EmptyOptions = styled.div`
  padding: 8px 18px;
`

export const Description = styled.li`
  padding: 0 18px 8px 18px;
  border-bottom: solid 1px ${theme.color('background')};
`

export const DescriptionAnnotation = styled.div`
  font-size: ${theme.font('text')};
  color: ${theme.color('background')};
`

export const SelectAllOption = styled(Option)`
  border-bottom: solid 1px ${theme.color('background')};
  font-weight: 600;
`
