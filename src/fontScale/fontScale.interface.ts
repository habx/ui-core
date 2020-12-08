type FontSize =
  | 'milkyWay'
  | 'superNova'
  | 'nova'
  | 'sun'
  | 'jupiter'
  | 'earth'
  | 'mars'
  | 'moon'
  | 'pluto'
  | 'asteroid'
  | 'dust'

type FontSizeConfig = {
  size: number
  lineHeight: number
}

export type FontScale = Record<FontSize, FontSizeConfig>
