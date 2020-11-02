import styled from 'styled-components'

import { theme } from '../theme'

export const LoaderContainer = styled.div<{
  loaderClipPathContainerId: string
}>`
  //https://stackoverflow.com/questions/39477755/how-to-make-clip-path-work-on-microsoft-edge
  clip-path: url(${({ loaderClipPathContainerId }) =>
    `#${loaderClipPathContainerId}`});
  background: #061a3c;
  position: relative;
  backface-visibility: hidden;
  --loader-size: 24px;
  &[data-size='large'] {
    --loader-size: 36px;
  }
  &[data-size='small'] {
    --loader-size: 18px;
  }
  height: var(--loader-size);
  width: var(--loader-size);
  &[data-colored='false'] {
    background: #949dab;
  }
`

const prepareProps = ({ size }: { size: 'large' | 'medium' | 'small' }) => {
  let height = 185

  if (size === 'large') {
    height = 360
  }
  if (size === 'medium') {
    height = 230
  }

  return {
    height,
  }
}
export const LoaderContent = styled.div.attrs(prepareProps)<{
  size: 'large' | 'medium' | 'small'
}>`
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 -${({ height }) => height - 10}px;
    }
  }
  height: ${({ height }) => height}px;
  width: 100%;
  animation: move 8s linear infinite;
  background-size: 100%;

  overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='209' viewBox='0 0 20 209' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0)'%3E %3Cpath d='M20 0H0V33H20V0Z' fill='%23061A3C'/%3E %3Cpath d='M20 17L0 32V48H20V17Z' fill='%23FFDA40'/%3E %3Cpath d='M20 17L0 32V48H20V17Z' fill='%23FFDA40'/%3E %3Cpath d='M0 33L20 48V66H0V33Z' fill='%23FF5100'/%3E %3Cpath d='M20 55H0V80H20V55Z' fill='%230071CE'/%3E %3Cpath d='M0 64L20 79V97H0V64Z' fill='%231DCAD3'/%3E %3Cpath d='M20 80L0 95V111H20V80Z' fill='%23061A3C'/%3E %3Cpath d='M20 111H0V144H20V111Z' fill='%23061A3C'/%3E %3Cpath d='M20 111L0 126V142H20V111Z' fill='%23FFDA40'/%3E %3Cpath d='M20 103.5H0V142H20V103.5Z' fill='%23FFDA40'/%3E %3Cpath d='M0 127L20 111.5V160H0V127Z' fill='%23FF5100'/%3E %3Cpath d='M20 143L0 158V174H20V143Z' fill='%230071CE'/%3E %3Cpath d='M0 165.5H20V191H0V165.5Z' fill='%231DCAD3'/%3E %3Cpath d='M0 175.5L20 190.5V208.5H0V175.5Z' fill='%23061A3C'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0'%3E %3Crect width='20' height='208.5' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E");
  &[data-colored='false'] {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='209' viewBox='0 0 20 209' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0)'%3E %3Cpath d='M20 0H0V33H20V0Z' fill='%23949DAB'/%3E %3Cpath d='M20 17L0 32V48H20V17Z' fill='%23FFDA40'/%3E %3Cpath d='M20 17L0 32V48H20V17Z' fill='%23DBDEE3'/%3E %3Cpath d='M0 33L20 48V66H0V33Z' fill='%23B8BEC7'/%3E %3Cpath d='M20 55H0V80H20V55Z' fill='%23949DAB'/%3E %3Cpath d='M0 64L20 79V97H0V64Z' fill='%23B8BEC7'/%3E %3Cpath d='M20 80L0 95V111H20V80Z' fill='%23DBDEE3'/%3E %3Cpath d='M20 111H0V144H20V111Z' fill='%23061A3C'/%3E %3Cpath d='M20 111L0 126V142H20V111Z' fill='%23FFDA40'/%3E %3Cpath d='M20 103.5H0V142H20V103.5Z' fill='%23DBDEE3'/%3E %3Cpath d='M0 127L20 111.5V160H0V127Z' fill='%23B8BEC7'/%3E %3Cpath d='M20 143L0 158V174H20V143Z' fill='%23949DAB'/%3E %3Cpath d='M0 165.5H20V191H0V165.5Z' fill='%23DBDEE3'/%3E %3Cpath d='M0 175.5L20 190.5V208.5H0V175.5Z' fill='%23949DAB'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0'%3E %3Crect width='20' height='208.5' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E");
  }
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MaskSvg = styled.svg`
  --loader-stroke: calc(var(--loader-size) / 6);
  height: calc(var(--loader-size) - var(--loader-stroke) * 2);
  width: calc(var(--loader-size) - var(--loader-stroke) * 2);
  fill: ${theme.color('background')};
  position: absolute;
  top: var(--loader-stroke);
  left: var(--loader-stroke);
  use {
    transform: scale(0.7);
  }
`

export const LoaderImg = styled.img`
  --loader-size: 24px;
  &[data-size='large'] {
    --loader-size: 36px;
  }
  &[data-size='small'] {
    --loader-size: 18px;
  }
  height: var(--loader-size);
`
