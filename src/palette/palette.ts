import { FullGradient, LimitedGradient } from './palette.interface'

const PURPLE_DAWN: LimitedGradient = {
  100: '#FBEEFB',
  200: '#E9ADE6',
  500: '#9A4797',
  700: '#5E2B5C',
  800: '#3B1B3A',
}

const YELLOW_SUNLIGHT: LimitedGradient = {
  100: '#FFF8E8',
  200: '#FFEBB9',
  500: '#FFBD15',
  700: '#E0A100',
  800: '#7A5800',
}

const RED_SUNSET: LimitedGradient = {
  100: '#FFEDEC',
  200: '#FFC9C5',
  500: '#FF4A3C',
  700: '#FF1C0A',
  800: '#A30C00',
}

const GREEN_NORTHERN_LIGHT: LimitedGradient = {
  100: '#EBFCF4',
  200: '#AFF2D2',
  500: '#38DF8F',
  700: '#199A5C',
  800: '#0B4228',
}

const NEUTRAL_BLACK: FullGradient = {
  100: '#FAFAFB',
  200: 'rgba(24, 20, 31, 0.05)',
  300: 'rgba(24, 20, 31, 0.15)',
  400: 'rgba(24, 20, 31, 0.35)',
  500: 'rgba(24, 20, 31, 0.5)',
  600: 'rgba(24, 20, 31, 0.6)',
  700: 'rgba(24, 20, 31, 0.79)',
  800: 'rgba(24, 20, 31, 0.85)',
  900: 'rgba(24, 20, 31, 0.9)',
  1000: '#18141F',
}

const NEUTRAL_WHITE: FullGradient = {
  100: 'rgba(255, 255, 255, 0.07)',
  200: 'rgba(255, 255, 255, 0.2)',
  300: 'rgba(255, 255, 255, 0.3)',
  400: 'rgba(255, 255, 255, 0.4)',
  500: 'rgba(255, 255, 255, 0.5)',
  600: 'rgba(255, 255, 255, 0.65)',
  700: 'rgba(255, 255, 255, 0.75)',
  800: 'rgba(255, 255, 255, 0.85)',
  900: 'rgba(255, 255, 255, 0.95)',
  1000: '#FFFFFF',
}

export const palette = {
  purple: PURPLE_DAWN,
  yellow: YELLOW_SUNLIGHT,
  red: RED_SUNSET,
  green: GREEN_NORTHERN_LIGHT,
  black: NEUTRAL_BLACK,
  white: NEUTRAL_WHITE,
}
