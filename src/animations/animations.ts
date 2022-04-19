import { css, keyframes as styledKeyframes } from 'styled-components'

import { Animations, Animation, AnimationConfig } from './animations.interface'

export const ANIMATION_DURATIONS = {
  xs: 30,
  s: 75,
  m: 150,
  l: 250,
}

export const ANIMATION_TIMING_FUNCTION = 'cubic-bezier(.04,.8,.61,1)'

export const transition = (
  propertyKey: string,
  config?: { duration?: keyof typeof ANIMATION_DURATIONS }
) =>
  `${propertyKey} ${
    ANIMATION_DURATIONS[config?.duration ?? 'm']
  }ms ${ANIMATION_TIMING_FUNCTION}`

const ANIMATIONS: Animations = {
  emerge: {
    duration: 'l',
    keyframes: styledKeyframes`
        from {
          transform: scale(0.95);
          opacity: 0
        }
        
        to {
          transform: scale(1);
          opacity: 1;
        }
      `,
  },
  emergeSlantFromTop: {
    duration: 'm',
    keyframes: styledKeyframes`
        from {
          transform: perspective(600px) rotateX(30deg) translateY(40px) scale(0.95);
          opacity: 0;
        }
        
        to {
          transform: perspective(600px) rotate3d(0) translateY(0) scale(1);
          opacity: 1;
        }
      `,
  },
  emergeSlantFromBottom: {
    duration: 'm',
    keyframes: styledKeyframes`
        from {
          transform: perspective(600px) rotateX(-30deg) translateY(400px) scale(0.95);
          opacity: 0;
        }
        
        to {
          transform: perspective(600px) rotateX(0) translateY(0) scale(1);
          opacity: 1;
        }
      `,
  },
  dive: {
    duration: 's',
    keyframes: styledKeyframes`
        from {
          transform: scale(1);
          opacity: 1;
        }
        
        to {
          transform: scale(0.95);
          opacity: 0;
        }
      `,
  },
  diveSlant: {
    duration: 's',
    keyframes: styledKeyframes`
        from {
          transform: perspective(600px) rotateX(0) scale(1);
          opacity: 1
        }
        
        to {
          transform: perspective(600px) rotateX(10deg) scale(0.95);
          opacity: 0;
        }
      `,
  },
}

export const animations =
  <GetterProps extends {}>(
    name: keyof Animations,
    config: Partial<AnimationConfig> = {}
  ) =>
  (_props: GetterProps) => {
    const animation = ANIMATIONS[name]

    const {
      keyframes,
      duration,
      timingFunction = ANIMATION_TIMING_FUNCTION,
    }: Animation = {
      ...animation,
      ...config,
    }

    return css`
      ${keyframes} ${ANIMATION_DURATIONS[duration]}ms
      ${timingFunction} 0ms 1 normal forwards;
    `
  }
