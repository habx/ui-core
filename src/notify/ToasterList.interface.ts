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
  id: string | number
}
