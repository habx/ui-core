import * as React from 'react'

import { useIsMounted, useTimeout } from '../_internal/hooks'
import { ANIMATION_DURATIONS } from '../animations'
import { LightBox } from '../LightBox'
import { Modal } from '../Modal'

import { subscribe } from './prompt'
import { StateModal } from './PromptModals.interface'

export const PromptModals: React.VoidFunctionComponent = () => {
  const isMounted = useIsMounted()
  const registerTimeout = useTimeout()

  const [modals, setModals] = React.useState<StateModal[]>([])

  const handleResolve = React.useCallback(
    (modal: StateModal, response: unknown) => {
      if (isMounted.current) {
        setModals((prev) =>
          prev.map((el) => (el.id === modal.id ? { ...el, open: false } : el))
        )

        registerTimeout(
          window.setTimeout(() => {
            if (isMounted.current) {
              setModals((prev) => prev.filter((el) => el.id !== modal.id))
            }
          }, ANIMATION_DURATIONS.m)
        )
      }

      modal.resolve(response)
    },
    [isMounted, registerTimeout]
  )

  React.useEffect(
    () =>
      subscribe(
        (props, options) =>
          new Promise((resolve) =>
            setModals((prev) => [
              ...prev,
              {
                options,
                props,
                resolve,
                id: Math.random(),
                open: true,
              },
            ])
          )
      ),
    []
  )

  return (
    <>
      {modals.map((modal) => {
        const { Component, children, ...rest } = modal.props({
          onResolve: (response) => handleResolve(modal, response),
        })

        rest.open ??= modal.open

        const props = {
          ...rest,
          children: Component ? <Component children={children} /> : children,
          key: modal.id,
          onClose: () => handleResolve(modal, undefined),
        }

        return props.fullscreen ? <LightBox {...props} /> : <Modal {...props} />
      })}
    </>
  )
}
