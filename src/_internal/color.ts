export const parseHexColor = (hex: string): [number, number, number] => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
]

export const isColorDark = (hex: string): boolean => {
  const rgb = parseHexColor(hex)

  return rgb[0] + rgb[1] + rgb[2] < (255 * 3) / 2
}
