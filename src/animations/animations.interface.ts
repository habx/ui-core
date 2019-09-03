import { Keyframes } from 'styled-components'

export type Durations = 'xs' | 's' | 'm' | 'l'

export interface AnimationConfig {
  duration: Durations
  timingFunction?: string
  testMode?: boolean
}

export interface Animation extends AnimationConfig {
  keyframes: Keyframes
}

export interface Animations {
  emerge: Animation
  emergeSlantFromTop: Animation
  emergeSlantFromBottom: Animation
  dive: Animation
  diveSlant: Animation
}
