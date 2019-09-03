import { Keyframes } from 'styled-components'

export interface AnimationConfig {
  duration: 'xs' | 's' | 'm' | 'l'
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
