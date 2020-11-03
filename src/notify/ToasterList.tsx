import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { useIsMounted, useTimeout } from '../_internal/hooks'
import { isClientSide } from '../_internal/ssr'
import { ToasterEventProps } from '../Toaster'

import { subscribe } from './notify'
import { StateToast } from './ToasterList.interface'
import {
  ToasterListContainer,
  ToasterContainer,
  Toaster,
  SLIDE_DURATION,
  SHRINK_DURATION,
} from './ToasterList.style'

const DEFAULT_DURATION = 5_000

export const ToasterList: React.FunctionComponent<{}> = () => {
  const isMounted = useIsMounted()
  const registerTimeout = useTimeout()

  const [toasts, setToasts] = React.useState<StateToast[]>([])

  const handleClose = React.useCallback(
    (toast: StateToast) => {
      if (isMounted.current) {
        setToasts((prev) =>
          prev.map((el) => (el.id === toast.id ? { ...el, open: false } : el))
        )

        registerTimeout(
          setTimeout(() => {
            if (isMounted.current) {
              setToasts((prev) => prev.filter((el) => el.id !== toast.id))
            }
          }, SLIDE_DURATION + SHRINK_DURATION)
        )
      }
    },
    [isMounted, registerTimeout]
  )

  React.useEffect(
    () =>
      subscribe((message, options) => {
        const toast = {
          message,
          options,
          open: true,
          id: Math.random(),
        }

        setToasts((prev) => [...prev, toast])

        if (options.duration !== 0) {
          registerTimeout(
            setTimeout(
              () => handleClose(toast),
              options.duration || DEFAULT_DURATION
            )
          )
        }
      }),
    [registerTimeout, handleClose]
  )

  const content = (
    <ToasterListContainer onClick={(e) => e.stopPropagation()}>
      {toasts.map((toast) => {
        const props: ToasterEventProps = (toast.message as ToasterEventProps)
          ?.message
          ? (toast.message as ToasterEventProps)
          : { message: toast.message as React.ReactNode }

        return (
          <ToasterContainer key={toast.id} data-closing={!toast.open}>
            <Toaster
              onClose={() => handleClose(toast)}
              data-closing={!toast.open}
              {...props}
            />
          </ToasterContainer>
        )
      })}
    </ToasterListContainer>
  )

  return isClientSide ? ReactDOM.createPortal(content, document.body) : content
}
