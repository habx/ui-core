import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { useIsMounted, useTimeout } from '../_internal/hooks'
import { ANIMATION_DURATIONS } from '../animations'
import { stringifyColor } from '../color'
import { NotificationProps, Toaster, ToasterEventProps } from '../Toaster'
import { useGetColorFromType } from '../useGetColorFromType'

import { subscribe } from './notify'
import { StateToast, ToastOptions } from './ToasterList.interface'
import { ToasterContainer, ToasterListContainer } from './ToasterList.style'

const DEFAULT_DURATION = 5_000

export const ToasterList: React.FunctionComponent = () => {
  const isMounted = useIsMounted()
  const registerTimeout = useTimeout()

  const [toasts, setToasts] = React.useState<StateToast[]>([])

  const planDestroy = React.useCallback(
    (toastId: number) => {
      const timeout = window.setTimeout(() => {
        if (isMounted.current) {
          setToasts((prev) => prev.filter((el) => el.id !== toastId))
        }
      }, ANIMATION_DURATIONS.l)

      registerTimeout(timeout)

      return timeout
    },
    [isMounted, registerTimeout]
  )

  const handleClose = React.useCallback(
    (toastId: number) => {
      if (isMounted.current) {
        const destroyTimeout = planDestroy(toastId)

        setToasts((prev) => {
          let prevToasts = [...prev]
          let toastToCloseIndex = prevToasts.findIndex(
            (el) => el.id === toastId
          )
          if (prevToasts[toastToCloseIndex]) {
            prevToasts[toastToCloseIndex].open = false
            prevToasts[toastToCloseIndex].timeout = destroyTimeout
            if (toastToCloseIndex === 0) {
              const nextToastIndex = prevToasts.findIndex(
                (el, i) => i > toastToCloseIndex && el.open
              )
              if (!!prevToasts[nextToastIndex]) {
                prevToasts[nextToastIndex].timeout = planClose(
                  prevToasts[nextToastIndex].id,
                  prevToasts[nextToastIndex].options
                )
              }
            }
          }
          return prevToasts
        })
      }
    },
    [isMounted, planDestroy]
  )

  const planClose = React.useCallback(
    (toastId: number, options: ToastOptions) => {
      if (options.duration === Infinity) {
        return
      }
      const timeout = window.setTimeout(
        () => handleClose(toastId),
        options.duration || DEFAULT_DURATION
      )

      registerTimeout(timeout)

      return timeout
    },
    [handleClose, registerTimeout]
  )
  const handleFreeze = () => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) => {
        if (toast.timeout) {
          clearTimeout(toast.timeout)
        }

        return {
          ...toast,
          hasBeenFrozen: true,
          timeout: null,
        }
      })
    )
  }

  const handleResetTimers = () => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) => ({
        ...toast,
        timeout: toast.open
          ? planClose(toast.id, toast.options)
          : planDestroy(toast.id),
      }))
    )
  }

  React.useEffect(
    () =>
      subscribe((message, options = {}) => {
        const toastId = Math.random()

        const toast: StateToast = {
          message,
          options,
          open: true,
          hasBeenFrozen: false,
          id: toastId,
          timeout: null,
        }

        setToasts((prev) => {
          if (!prev.length) {
            toast.timeout = planClose(toast.id, toast.options)
          }
          return [...prev, toast]
        })
      }),
    [planClose]
  )

  const getColorFromType = useGetColorFromType()

  /*
   * This check gives us the assurance that the ReactDOM.createPortal won't be called on SSR
   * Because the subscription is set in a useEffect
   */
  if (toasts.length === 0) {
    return null
  }

  return ReactDOM.createPortal(
    <ToasterListContainer onClick={(e) => e.stopPropagation()}>
      {toasts.map((toast) => {
        const props: NotificationProps = (toast.message as ToasterEventProps)
          ?.message
          ? (toast.message as ToasterEventProps)
          : { message: toast.message as React.ReactNode }

        if (!props.backgroundColor && toast.options?.type) {
          props.backgroundColor = stringifyColor(
            getColorFromType(toast.options.type)
          )
        }

        return (
          <ToasterContainer
            key={toast.id}
            onMouseEnter={handleFreeze}
            onMouseLeave={handleResetTimers}
            data-has-been-frozen={toast.hasBeenFrozen}
            data-closing={!toast.open}
          >
            <Toaster
              onClose={() => {
                handleClose(toast.id)
                toast.options.onClose?.()
              }}
              {...props}
            />
          </ToasterContainer>
        )
      })}
    </ToasterListContainer>,
    document.body
  )
}
