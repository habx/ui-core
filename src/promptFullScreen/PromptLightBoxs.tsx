import * as React from 'react'
import { createPortal } from 'react-dom'

import { useIsMounted, useTimeout } from '../_internal/hooks'
import { isClientSide } from '../_internal/ssr'
import LightBox from '../LightBox/LightBox'
import { ANIMATION_DURATION } from '../LightBox/LightBox.style'

import { subscribe } from './promptFullScreen'
import { StateModal } from './PromptLightBoxs.interface'

const PromptLightBoxs: React.FunctionComponent<{}> = () => {
  const isMounted = useIsMounted()
  const registerTimeout = useTimeout()

  const [modals, setModals] = React.useState<StateModal[]>([])

  const handleResolve = React.useCallback(
    (modal: StateModal, response: unknown) => {
      if (isMounted.current) {
        setModals(prev =>
          prev.map<StateModal>(el =>
            el.id === modal.id ? { ...el, open: false } : el
          )
        )

        registerTimeout(
          setTimeout(() => {
            if (isMounted.current) {
              setModals(prev => prev.filter(el => el.id !== modal.id))
            }
          }, ANIMATION_DURATION)
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
          new Promise(resolve => {
            const modal: StateModal = {
              props,
              options,
              resolve,
              open: true,
              id: Math.random(),
            }

            setModals(prev => [...prev, modal])
          })
      ),
    []
  )

  return (
    <React.Fragment>
      {modals.map((modal: StateModal) => {
        const { Component, ...resultProps } = modal.props({
          onResolve: response => handleResolve(modal, response),
        })

        const children = Component ? <Component /> : resultProps.children

        const content = (
          <LightBox
            open={modal.open}
            key={modal.id}
            onClose={() => handleResolve(modal, undefined)}
            {...resultProps}
          >
            {children}
          </LightBox>
        )

        if (isClientSide) {
          return createPortal(content, document.body)
        }

        return content
      })}
    </React.Fragment>
  )
}

export default PromptLightBoxs
