import { AlertBannerProps } from '../AlertBanner'
import { buildEventHandler } from '../Provider/Provider.events'

import { AlertOptions } from './AlertList.interface'

export const { dispatch: alert, subscribe } = buildEventHandler<
  AlertBannerProps | string,
  AlertOptions
>()
