import * as React from 'react'
// import * as ReactDOM from 'react-dom'

import { useIsMounted, useTimeout } from '../_internal/hooks'

import { subscribe } from './alert'
import { AlertOptions, StateAlert } from './AlertList.interface'

const DEFAULT_DURATION = 5_000

export const AlertList: React.VoidFunctionComponent = () => {
  const isMounted = useIsMounted()
  const registerTimeout = useTimeout()

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

  const planClose = React.useCallback(
    (alertId: number, options: AlertOptions) => {
      const timeout = window.setTimeout(
        () => handleClose(alertId),
        options.duration || DEFAULT_DURATION
      )

      registerTimeout(timeout)

      return timeout
    },
    [handleClose, registerTimeout]
  )

  React.useEffect(
    () =>
      subscribe((message, options = {}) => {
        const alertId = Math.random()

        let closeToastTimeout: number | undefined

        if (options.duration !== 0) {
          closeToastTimeout = planClose(alertId, options)
        }

        const toast: StateAlert = {
          message,
          options,
          open: true,
          id: alertId,
          timeout: closeToastTimeout ?? null,
        }

        setAlerts((prev) => [...prev, toast])
      }),
    [planClose]
  )

  if (alerts.length === 0) {
    return null
  }
  return <></>
}
