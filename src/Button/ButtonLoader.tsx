import * as React from 'react'
import styled from 'styled-components'

import theme from '../theme'

const ButtonLoaderAnimated = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  height: 100%;
  width: 100%;
  margin: auto;

  > span {
    position: absolute;
    width: var(--loader-dot-size);
    height: var(--loader-dot-size);
    background: var(--loader-dot-color-1);
    border-radius: 50%;
    transform: translateY(calc(var(--loader-dot-size) * -0.5));
    animation: animated-dots 1s infinite ease-in-out;
  }

  > span:nth-child(1) {
    margin-left: calc(var(--loader-dot-size) * -2);
    animation-delay: 0.2s;
  }

  > span:nth-child(2) {
    margin-left: 0;
    animation-delay: 0.4s;
  }

  > span:nth-child(3) {
    margin-left: calc(var(--loader-dot-size) * 2);
    animation-delay: 0.6s;
  }

  @keyframes animated-dots {
    0% {
      transform: translateY(calc(var(--loader-dot-size) * -0.5));
      background: var(--loader-dot-color-2);
    }
    50% {
      transform: translateY(calc(var(--loader-dot-size)));
      background: var(--loader-dot-color-1);
    }
    100% {
      transform: translateY(calc(var(--loader-dot-size) * -0.5));
      background: var(--loader-dot-color-2);
    }
  }
`

const ChildrenContainer = styled.div`
  opacity: 0;
`

const ButtonLoaderContainer = styled.div`
  --loader-dot-size: 6px;

  &[data-large='true'] {
    --loader-dot-size: 8px;
  }

  &[data-small='true'] {
    --loader-dot-size: 4px;
  }

  --loader-dot-color-1: ${theme.color('background')};
  --loader-dot-color-2: ${theme.color('background', { opacity: 0.25 })};

  &[data-link='true'] {
    --loader-dot-color-1: ${theme.color('primary', { dynamic: true })};
    --loader-dot-color-2: ${theme.color('primary', {
      opacity: 0.25,
      dynamic: true,
    })};
  }
  &[data-outline='true'] {
    --loader-dot-color-1: ${theme.color('secondary', { dynamic: true })};
    --loader-dot-color-2: ${theme.color('secondary', {
      opacity: 0.25,
      dynamic: true,
    })};
  }
`

const ButtonLoader: React.FunctionComponent<ButtonLoaderInterface> = ({
  children,
  large,
  small,
  link,
  outline,
  ...props
}) => {
  return (
    <ButtonLoaderContainer
      data-large={large}
      data-small={small}
      data-link={link}
      data-outline={outline}
      {...props}
    >
      <ButtonLoaderAnimated>
        <span />
        <span /> <span />
      </ButtonLoaderAnimated>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ButtonLoaderContainer>
  )
}

interface ButtonLoaderInterface {
  link: boolean
  outline: boolean
  small: boolean
  large: boolean
  warning: boolean
}

export default ButtonLoader
