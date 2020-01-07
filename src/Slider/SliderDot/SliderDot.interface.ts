export default interface SliderDotProps {
  position: number
  onMove: (deltaPixel: number) => void
  onRest: () => void
  innerColor?: string
  large?: boolean
}
