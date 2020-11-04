import { buildEventHandler } from '../Provider/Provider.events'
import { ToasterEventProps } from '../Toaster'

import { ToastOptions } from './ToasterList.interface'

export const { dispatch: notify, subscribe } = buildEventHandler<
  ToasterEventProps | string,
  ToastOptions
>()
