import useModal, { ModalConfig } from '@delangle/use-modal'
import * as React from 'react'

import { TogglePanelContext } from '../TogglePanel/TogglePanel.context'

import {
  WithFloatingPanelBehavior,
  FloatingPanelInjectedProps,
} from './withFloatingPanelBehavior.interface'

const FloatingPanelContext = React.createContext<React.RefObject<HTMLElement> | null>(
  null
)

export const withFloatingPanelBehavior = (
  defaultModalConfig: Omit<
    ModalConfig,
    'open' | 'onClose' | 'value' | 'ref'
  > = {}
) => <
  RefElement extends HTMLDivElement,
  Props extends FloatingPanelInjectedProps
>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Field = React.forwardRef<RefElement, WithFloatingPanelBehavior<Props>>(
    (
      { children, open, onClose, persistent, value, animated, ...rest },
      ref
    ) => {
      const modal = useModal({
        ref,
        open,
        onClose,
        value,
        persistent: persistent ?? defaultModalConfig.persistent,
        animated: animated ?? defaultModalConfig.animated,
        animationDuration: defaultModalConfig.animationDuration,
      })

      const parentFloatingPanelRef = React.useContext(FloatingPanelContext)

      const props = ({
        modal,
        parentFloatingPanelRef,
        ...rest,
      } as any) as Props

      return (
        <TogglePanelContext.Provider value={modal}>
          <FloatingPanelContext.Provider value={modal.ref}>
            <WrappedComponent {...props} ref={modal.ref}>
              {children}
            </WrappedComponent>
          </FloatingPanelContext.Provider>
        </TogglePanelContext.Provider>
      )
    }
  )

  return Field
}
