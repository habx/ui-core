import { AlertBannerProps } from '../AlertBanner'
import { buildEventHandler } from '../Provider/Provider.events'

export const { dispatch: alert, subscribe } = buildEventHandler<
  Omit<AlertBannerProps, 'open'> | string
>()
