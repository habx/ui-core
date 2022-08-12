import { ToasterEventProps } from '../Toaster'
import { ColorType } from '../useGetColorFromType'

export type ToastOptions = {
  type?: ColorType
  duration?: number
  identifier?: string | number
  onClose?: () => void
}

export type StateToast = {
  message: string | ToasterEventProps
  options: ToastOptions
  open: boolean
  id: number
  timeout: number | null | undefined

  /**
   * We don't want to re-trigger entering animation when un-freezing a toaster
   */
  hasBeenFrozen: boolean
}
