import styled from 'styled-components'

import breakpoints from '../breakpoints'
import theme from '../theme'

export const IconContainer = styled.div`
  display: flex;
  font-size: 17px;

  &[data-position='left'] {
    margin-right: 12px;
  }

  &[data-position='right'] {
    margin-left: 16px;
  }
`

export const ButtonContent = styled.div`
  position: relative;
  white-space: nowrap;

  &[data-arrow='true'] {
    padding-right: 48px;

    &:after {
      content: '\\02192';
      font-family: habx-icon;
      font-size: 22px;
      position: absolute;
      display: flex;
      align-items: center;
      top: 0;
      bottom: 8px;
      right: 0;
      transition: all 0.5s;
    }
  }
`

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  border-radius: 2px;
  font-weight: 500;

  padding: 12px 23px;
  max-width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-family: ${theme.get('textFont')}, sans-serif;

  transition-property: border, padding, background-color;
  transition-duration: 50ms;
  transition-timing-function: ease-in-out;

  &[data-small='true'] {
    padding: 6px 16px;
    line-height: 18px;
    font-size: 14px;

    & ${IconContainer} {
      font-size: 15px;
    }
  }

  &[data-large='true'] {
    font-size: 18px;
    line-height: 27px;
    padding: 16.5px 70px 16.5px 70px;
    max-width: calc(100vw - 48px);
  }

  &[data-outline='true'] {
    background-color: transparent;
    color: ${theme.get('darkBlue900')};
    border: 2px solid ${theme.get('darkBlue900')};

    &:hover,
    &:active {
      border-width: 4px;
      padding: 10px 21px;

      &[data-large='true'] {
        padding: 15.5px 68px 15.5px 68px;
      }

      &[data-small='true'] {
        padding: 4px 14px;
      }
    }

    &:active {
      opacity: 0.7;
    }
  }

  &[data-outline='false'] {
    border: 2px solid transparent;
    background-color: ${theme.get('blue600')};
    color: ${theme.get('white')};

    &:hover,
    &:active {
      background-color: ${theme.get('blue500')};
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;

    &[data-outline='false'] {
      background-color: ${theme.get('darkBlue900')};
    }

    &[data-outline='true'] {
      color: ${theme.get('textColor')};
    }
  }

  &[data-arrow] {
    :hover ${ButtonContent}:after, :active arrow${ButtonContent}:after {
      right: -4px;
    }
  }

  @media (${breakpoints.below.phone}) {
    font-size: 16px;
  }
`
