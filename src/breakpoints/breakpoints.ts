import { mapValues } from '../_internal/data'

const SIZES = {
  desktop: 1296,
  tablet: 1024,
  smallTablet: 768,
  phone: 600,
}

type sizes = 'desktop' | 'tablet' | 'smallTablet' | 'phone'

type breakpoints = {
  above: { [key in sizes]: string }
  below: { [key in sizes]: string }
  raw: { [key in sizes]: number }
}

const breakpoints: breakpoints = {
  above: mapValues(
    SIZES,
    (value: number): string => `min-width: ${(value + 1) / 16}em`
  ) as { [key in sizes]: string },
  below: mapValues(
    SIZES,
    (value: number): string => `max-width: ${value / 16}em`
  ) as { [key in sizes]: string },
  raw: SIZES,
}

export default breakpoints
