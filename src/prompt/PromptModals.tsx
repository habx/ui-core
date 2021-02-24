import * as React from 'react'

import { useIsMounted, useTimeout } from '../_internal/hooks'
import { ANIMATION_DURATIONS } from '../animations'
import { LightBox } from '../LightBox'
import { Modal } from '../Modal'

import { subscribe } from './prompt'
import { StateModal } from './PromptModals.interface'

export const PromptModals: React.FunctionComponent<{}> = () => {
  const isMounted = useIsMounted()
  const registerTimeout = useTimeout()

  const [modals, setModals] = React.useState<StateModal[]>([])

  const handleResolve = React.useCallback(
    (modal: StateModal, response: unknown) => {
      if (isMounted.current) {
        setModals((prev) =>
          prev.map<StateModal>((el) =>
            el.id === modal.id ? { ...el, open: false } : el
          )
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
          new Promise((resolve) => {
            const modal: StateModal = {
              props,
              options,
              resolve,
              open: true,
              id: Math.random(),
            }

            setModals((prev) => [...prev, modal])
          })
      ),
    []
  )

  return (
    <React.Fragment>
      {modals.map((modal: StateModal) => {
        const { Component, fullscreen, ...resultProps } = modal.props({
          onResolve: (response) => handleResolve(modal, response),
        })

        const children = Component ? <Component /> : resultProps.children

        if (fullscreen) {
          return (
            <LightBox
              open={modal.open}
              key={modal.id}
              {...resultProps}
              onClose={() => handleResolve(modal, undefined)}
            >
              {children}
            </LightBox>
          )
        }

        return (
          <Modal
            open={modal.open}
            key={modal.id}
            {...resultProps}
            onClose={() => handleResolve(modal, undefined)}
          >
            {children}
          </Modal>
        )
      })}
    </React.Fragment>
  )
}
