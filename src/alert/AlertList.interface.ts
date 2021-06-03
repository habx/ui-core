import { AlertBannerProps } from '../AlertBanner'

export type StateAlert = {
  message: string | Omit<AlertBannerProps, 'open'>
  open: boolean
  id: number
}
