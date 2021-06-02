import { AlertBannerProps } from '../AlertBanner'

export type AlertOptions = {
  // type?: ColorType
  duration?: number
  identifier?: string | number
}

export type StateAlert = {
  message: string | AlertBannerProps
  options: AlertOptions
  open: boolean
  id: number
  timeout: number | null
}
