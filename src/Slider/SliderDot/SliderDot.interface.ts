import { Tooltip } from '../Slider.interface'

export interface SliderDotProps {
  position: number
  onMove: (deltaPixel: number) => void
  onRest: () => void
  innerColor?: string
  large?: boolean
  dotType: 'regular' | 'tag'
  tooltip: Tooltip
}
