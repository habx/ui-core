import styled from 'styled-components'

import palette from '../palette'
import theme from '../theme'

export const Input = styled.input`
  align-items: center;
  margin-right: 12px;
  display: none;

  & + label {
    user-select: none;
    font-size: 13px;
    position: relative;
    padding-left: 38px;
    cursor: pointer;

    & a:not(:visited) {
      color: ${theme.color('primary', { dynamic: true })};
    }
  }

  & + label {
    line-height: 28px;
  }

  & + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: solid 2px ${palette.darkBlue[200]};
  }

  &:not(:checked) + label:before {
    background: #fdfbfa;
  }

  &:checked + label:before {
    border-color: ${theme.color('primary')};
    background-color: ${theme.color('primary')};
  }

  & + label:after {
    font-family: habx-icon;
    content: '✔';
    position: absolute;
    top: 0;
    left: 7px;
    font-size: 16px;
    color: #fff;
    transition: all 0.2s;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }

  &[data-error='true'] + label:before {
    border: solid 2px ${palette.orange[400]};
  }

  &[data-error='true']:checked + label:before {
    background-color: ${palette.orange[400]};
  }

  &:disabled + label:before {
    border-color: ${palette.darkBlue[300]};
  }

  &:disabled:checked + label:before {
    background-color: ${palette.darkBlue[300]};
  }
`
