import styled from 'styled-components'

export const LoaderDotsContainer = styled.div`
  --loader-dot-size: 6px;

  &[data-large='true'] {
    --loader-dot-size: 8px;
  }

  &[data-small='true'] {
    --loader-dot-size: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  height: 100%;
  width: 100%;
  min-width: 100px;
  margin: auto;

  span {
    position: absolute;
    width: var(--loader-dot-size);
    height: var(--loader-dot-size);
    background: currentColor;
    opacity: 1;
    border-radius: 50%;
    transform: translateY(calc(var(--loader-dot-size) * -1));
    animation: animated-dots 1s infinite ease-in-out;
  }

  span:nth-child(1) {
    margin-left: calc(var(--loader-dot-size) * -2);
    animation-delay: 0.2s;
  }

  span:nth-child(2) {
    margin-left: 0;
    animation-delay: 0.4s;
  }

  span:nth-child(3) {
    margin-left: calc(var(--loader-dot-size) * 2);
    animation-delay: 0.6s;
  }

  @keyframes animated-dots {
    0% {
      transform: translateY(calc(var(--loader-dot-size) * -1));
      opacity: 0.25;
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      transform: translateY(calc(var(--loader-dot-size) * -1));
      opacity: 0.25;
    }
  }
`
