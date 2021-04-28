import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { ANIMATION_DURATIONS } from '../animations'
import { useCurrentBackground } from '../useCurrentBackground'
import {
  WithFloatingPanelBehavior,
  withFloatingPanelBehavior,
} from '../withFloatingPanelBehavior'
import { withTriggerElement } from '../withTriggerElement'

import { LightBoxInnerProps } from './LightBox.interface'
import { LightBoxContainer, CloseIcon } from './LightBox.style'

const InnerLightBox = React.forwardRef<HTMLDivElement, LightBoxInnerProps>(
  (props, ref) => {
    const {
      modal,
      parentFloatingPanelRef,
      children,
      spacing,
      hideCloseIcon,
      style,
      ...rest
    } = props
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
        data-testid="lightbox-container"
        style={
          {
            ...(style ?? {}),
            '--modal-animation-duration': `${modal.animationDuration}ms`,
          } as React.CSSProperties
        }
        {...rest}
      >
        {!hideCloseIcon && (
          <CloseIcon
            data-testid="lightbox-close-icon"
            icon="close"
            onClick={modal.close}
            small
          />
        )}
        {isFunction(children) ? children(modal) : children}
      </LightBoxContainer>,
      parentFloatingPanelRef?.current ?? document.body
    )
  }
)

export const LightBox = withTriggerElement<HTMLDivElement>()<
  Omit<WithFloatingPanelBehavior<LightBoxInnerProps>, 'persistent'>
>(
  withFloatingPanelBehavior({
    animated: true,
    animationDuration: ANIMATION_DURATIONS.l,
  })(InnerLightBox)
)
