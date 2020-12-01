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

const RAZZMATAZZ_RED: LimitedGradient = {
  100: '#FBE7EE',
  200: '#EE9FBB',
  500: '#D50F56',
  700: '#770830',
  800: '#4B0A21',
}

const EMERALD_GREEN: LimitedGradient = {
  100: '#EAF5F3',
  200: '#9FD1C8',
  500: '#299985',
  700: '#12433B',
  800: '#0C2C27',
}

const GOLDEN_YELLOW: LimitedGradient = {
  100: '#FEF7E6',
  200: '#FBE099',
  500: '#F6B100',
  700: '#8F6700',
  800: '#473300',
}

const NEUTRAL_BLACK_OPACITY: FullGradient = {
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

const NEUTRAL_WHITE_OPACITY: FullGradient = {
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

const NEUTRAL_BLACK_INTENSITY: FullGradient = {
  100: '#FAFAFB',
  200: '#F3F3F4',
  300: '#DCDCDD',
  400: '#AEADB1',
  500: '#8B898F',
  600: '#747279',
  700: '#49454E',
  800: '#3B3741',
  900: '#2F2C35',
  1000: '#18141F',
}

const NEUTRAL_WHITE_INTENSITY: FullGradient = {
  100: '#28242F',
  200: '#46434C',
  300: '#5D5A62',
  400: '#747279',
  500: '#8B898F',
  600: '#AEADB1',
  700: '#C5C4C7',
  800: '#DCDCDD',
  900: '#F3F3F4',
  1000: '#FFFFFF',
}

export const palette = {
  purpleDawn: PURPLE_DAWN,
  yellowSunlight: YELLOW_SUNLIGHT,
  redSunset: RED_SUNSET,
  greenNorthernLight: GREEN_NORTHERN_LIGHT,
  neutralBlackOpacity: NEUTRAL_BLACK_OPACITY,
  neutralWhiteOpacity: NEUTRAL_WHITE_OPACITY,
  neutralBlackIntensity: NEUTRAL_BLACK_INTENSITY,
  neutralWhiteIntensity: NEUTRAL_WHITE_INTENSITY,
  razzmatazzRed: RAZZMATAZZ_RED,
  emeraldGreen: EMERALD_GREEN,
  goldenYellow: GOLDEN_YELLOW,
}
