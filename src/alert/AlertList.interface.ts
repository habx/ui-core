import { AlertBannerProps } from '../AlertBanner'

export type StateAlert = {
  message: string | AlertBannerProps
  open: boolean
  id: number
}
