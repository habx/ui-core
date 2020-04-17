import * as React from 'react'
import styled from 'styled-components'

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
    background: currentColor;
    opacity: 1;
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
      background: currentColor;
      opacity: 0.25;
    }
    50% {
      transform: translateY(calc(var(--loader-dot-size)));
      background: currentColor;
      opacity: 1;
    }
    100% {
      transform: translateY(calc(var(--loader-dot-size) * -0.5));
      background: currentColor;
      opacity: 0.25;
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
`

const ButtonLoader: React.FunctionComponent<ButtonLoaderInterface> = ({
  children,
  large,
  small,
  ...props
}) => {
  return (
    <ButtonLoaderContainer data-large={large} data-small={small} {...props}>
      <ButtonLoaderAnimated>
        <span />
        <span /> <span />
      </ButtonLoaderAnimated>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ButtonLoaderContainer>
  )
}

interface ButtonLoaderInterface {
  small: boolean
  large: boolean
  warning: boolean
}

export default ButtonLoader
