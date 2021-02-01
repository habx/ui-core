import useModal, { Modal } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { withTogglePanelReset } from '../_internal/withTogglePanelReset'
import { ANIMATION_DURATIONS } from '../animations'
import { useCurrentBackground } from '../useCurrentBackground'
import { withTriggerElement } from '../withTriggerElement'

import { LightBoxInnerProps } from './LightBox.interface'
import { LightBoxContainer, CloseIcon } from './LightBox.style'

const InnerLightBox = React.forwardRef<HTMLDivElement, LightBoxInnerProps>(
  (props, ref) => {
    const {
      open,
      onClose,
      children,
      persistent,
      spacing,
      hideCloseIcon,
      value,
      animated = true,
      ...rest
    } = props

    const modal = useModal<HTMLDivElement>({
      open,
      onClose,
      persistent,
      value,
      animated,
      animationDuration: ANIMATION_DURATIONS.l,
    })

    const backgroundColor = useCurrentBackground({ useRootTheme: true })

    if (!modal.hasAlreadyBeenOpened) {
      return null
    }

    return ReactDOM.createPortal(
      <LightBoxContainer
        ref={ref}
        backgroundColor={backgroundColor}
        data-state={modal.state}
        data-spacing={spacing}
        {...rest}
      >
        {!hideCloseIcon && (
          <CloseIcon icon="close" onClick={modal.close} small />
        )}
        {isFunction(children)
          ? children(modal as Modal<HTMLDivElement>)
          : children}
      </LightBoxContainer>,
      document.body
    )
  }
)

export const LightBox = withTogglePanelReset(
  withTriggerElement<HTMLDivElement>()<LightBoxInnerProps>(InnerLightBox)
)
