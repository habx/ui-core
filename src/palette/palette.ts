import { Gradient } from './palette.interface'

const PURPLE_DAWN: Gradient = {
  0: '#FFFFFF',
  100: '#FBEEFB',
  200: '#E9ADE6',
  300: '#D289CF',
  400: '#C469C1',
  500: '#9A4797',
  600: '#813C7F',
  700: '#5E2B5C',
  800: '#3B1B3A',
  900: '#2D132C',
  1000: '#000000',
}

const YELLOW_SUNLIGHT: Gradient = {
  0: '#FFFFFF',
  100: '#FFF8E8',
  200: '#FFEBB9',
  300: '#FFDA7A',
  400: '#FFCB47',
  500: '#FFBD15',
  600: '#F0AC00',
  700: '#E0A100',
  800: '#7A5800',
  900: '#342809',
  1000: '#000000',
}

const RED_SUNSET: Gradient = {
  0: '#FFFFFF',
  100: '#FFEDEC',
  200: '#FFC9C5',
  300: '#FFAAA3',
  400: '#FF7A70',
  500: '#FF4A3C',
  600: '#FF1C0A',
  700: '#D60F00',
  800: '#A30C00',
  900: '#39100C',
  1000: '#000000',
}

const GREEN_NORTHERN_LIGHT: Gradient = {
  0: '#FFFFFF',
  100: '#EBFCF4',
  200: '#AFF2D2',
  300: '#91EDC1',
  400: '#65E6A9',
  500: '#38DF8F',
  600: '#20C577',
  700: '#199A5C',
  800: '#0B4228',
  900: '#1B2A29',
  1000: '#000000',
}

const BLUE_MOON: Gradient = {
  0: '#FFFFFF',
  100: '#E1E5EA',
  200: '#C3CBD5',
  300: '#A5B1C0',
  400: '#8291A6',
  500: '#6A7C95',
  600: '#4D6280',
  700: '#354F73',
  800: '#203655',
  900: '#0F1E33',
  1000: '#000000',
}

const RAZZMATAZZ_RED: Gradient = {
  0: '#FFFFFF',
  100: '#FBE7EE',
  200: '#EE9FBB',
  300: '#F45E94',
  400: '#EB407E',
  500: '#D50F56',
  600: '#A70C43',
  700: '#770830',
  800: '#4B0A21',
  900: '#2D0614',
  1000: '#000000',
}

const GOLDEN_YELLOW: Gradient = {
  0: '#FFFFFF',
  100: '#FEF7E6',
  200: '#FBE099',
  300: '#FFD15C',
  400: '#FFC329',
  500: '#F6B100',
  600: '#C28B00',
  700: '#8F6700',
  800: '#473300',
  900: '#241A00',
  1000: '#000000',
}

const EMERALD_GREEN: Gradient = {
  0: '#FFFFFF',
  100: '#EAF5F3',
  200: '#9FD1C8',
  300: '#82CBBE',
  400: '#59C0AD',
  500: '#299985',
  600: '#1D6D60',
  700: '#12433B',
  800: '#0C2C27',
  900: '#071815',
  1000: '#000000',
}

const NEUTRAL_BLACK_WITH_OPACITY_FADING: Gradient = {
  0: '#FFFFFF',
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

const NEUTRAL_WHITE_WITH_OPACITY_FADING: Gradient = {
  0: 'rgba(255, 255, 255, 0)',
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

const NEUTRAL_BLACK_WITH_INTENSITY_FADING: Gradient = {
  0: '#FFFFFF',
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

const NEUTRAL_WHITE_WITH_INTENSITY_FADING: Gradient = {
  0: '#000000',
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
  blueMoon: BLUE_MOON,
  neutralBlackWithOpacityFading: NEUTRAL_BLACK_WITH_OPACITY_FADING,
  neutralWhiteWithOpacityFading: NEUTRAL_WHITE_WITH_OPACITY_FADING,
  neutralBlackWithIntensityFading: NEUTRAL_BLACK_WITH_INTENSITY_FADING,
  neutralWhiteWithIntensityFading: NEUTRAL_WHITE_WITH_INTENSITY_FADING,
  redRazzmatazz: RAZZMATAZZ_RED,
  greenEmerald: EMERALD_GREEN,
  yellowGolden: GOLDEN_YELLOW,
}
