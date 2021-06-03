import * as React from 'react'

import { useIsMounted } from '../_internal/hooks'
import { AlertBannerProps } from '../AlertBanner'
import { AlertBanner } from '../AlertBanner/AlertBanner'

import { subscribe } from './alert'
import { StateAlert } from './AlertList.interface'
import { AlertContainer } from './AlertList.style'

export const AlertList: React.VoidFunctionComponent = () => {
  const isMounted = useIsMounted()

  const [alerts, setAlerts] = React.useState<StateAlert[]>([])

  const handleClose = React.useCallback(
    (alertId: number) => {
      if (isMounted.current) {
        setAlerts((prev) =>
          prev.map((el) => (el.id === alertId ? { ...el, open: false } : el))
        )
      }
    },
    [isMounted]
  )

  React.useEffect(() =>
    subscribe((message, options = {}) => {
      const alertId = Math.random()

      const alert: StateAlert = {
        message,
        options,
        open: true,
        id: alertId,
      }

      setAlerts((prev) => [...prev, alert])
    })
  )

  if (alerts.length === 0) {
    return null
  }

  return (
    <AlertContainer>
      {alerts.map((alert) => {
        const props = (alert.message as AlertBannerProps)?.message
          ? (alert.message as AlertBannerProps)
          : { message: alert.message as string }

        return (
          <AlertBanner
            onClose={() => handleClose(alert.id)}
            {...props}
            open={alert.open}
          />
        )
      })}
    </AlertContainer>
  )
}
