import { ToasterEventProps } from '../Toaster/Toaster.interface'

export type ToastOptions = {
  type?: 'info' | 'error' | 'warning'
  duration?: number
  identifier?: string | number
}

export type StateToast = {
  message: string | ToasterEventProps
  options: ToastOptions
  open: boolean
  id: number
  timeout: number | null

  /**
   * We don't want to re-trigger entering animation when un-freezing a toaster
   */
  hasBeenFrozen: boolean
}
