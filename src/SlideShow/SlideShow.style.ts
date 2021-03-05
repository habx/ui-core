import Swipe from 'react-easy-swipe'
import styled, { css } from 'styled-components'

import { breakpoints } from '../breakpoints'

export const DESKTOP_ANIMATION_DURATION = 500

export const MOBILE_ANIMATION_DURATION = 300

export const SlideShowContainer = styled(Swipe)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`

export const SlideShowSlidingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  flex: 1 1 100%;
  overflow: hidden;
`

export const SlideShowSlidingContent = styled.div<{ size: number }>`
  position: relative;
  transform: translate3d(0, 0, 0);
  flex: 1 1 100%;

  @media (${breakpoints.below.phone}) {
    ${({ size }) => css`
      ${Array.from(
        { length: size },
        (_, i) => `
        &[data-current="${i}"] {
          transform: translateX(${-i * 100}%);
        }
      `
      ).join('')};
    `};

    transition: transform ${MOBILE_ANIMATION_DURATION}ms ease-in-out 0s;
  }
`

export const SlideContent = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &[data-first='true'] {
    opacity: 0;
  }

  &:not([data-first='true']) {
    position: absolute;
    top: 0;
    bottom: 0;
  }
`

export const SlideShowNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
  flex: 0 0 auto;
`
