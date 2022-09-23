import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction, isString } from '../_internal/data'
import { ANIMATION_DURATIONS } from '../animations'
import { RoundIconButton } from '../RoundIconButton'
import { Title } from '../Title'
import { useCurrentBackground } from '../useCurrentBackground'
import {
  withFloatingPanelBehavior,
  WithFloatingPanelBehavior,
} from '../withFloatingPanelBehavior'
import { withTriggerElement } from '../withTriggerElement'

import { SidePanelInnerProps } from './SidePanel.interface'
import {
  SidePanelOverlay,
  SidePanelContainer,
  SidePanelContent,
  SidePanelScrollableContent,
  HeaderBarContainer,
} from './SidePanel.style'

const InnerSidePanel = React.forwardRef<HTMLDivElement, SidePanelInnerProps>(
  (props, ref) => {
    const {
      modal,
      parentFloatingPanelRef,
      children,
      title,
      hideCloseIcon,
      ...rest
    } = props

    const backgroundColor = useCurrentBackground({ useRootTheme: true })

    if (!modal.hasAlreadyBeenOpened) {
      return null
    }

    return ReactDOM.createPortal(
      <SidePanelOverlay
        data-state={modal.state}
        data-testid="modal-overlay"
        style={
          {
            '--modal-animation-duration': `${modal.animationDuration}ms`,
          } as React.CSSProperties
        }
      >
        <SidePanelContainer
          backgroundColor={backgroundColor}
          ref={ref}
          data-testid="modal-container"
          {...rest}
        >
          {(title || !hideCloseIcon) && (
            <HeaderBarContainer>
              {isString(title) ? (
                <Title type="section">{title}</Title>
              ) : (
                title ?? <div />
              )}
              {!hideCloseIcon && (
                <RoundIconButton onClick={modal.close} icon="close" />
              )}
            </HeaderBarContainer>
          )}
          <SidePanelContent>
            <SidePanelScrollableContent>
              {isFunction(children) ? children(modal) : children}
            </SidePanelScrollableContent>
          </SidePanelContent>
        </SidePanelContainer>
      </SidePanelOverlay>,
      parentFloatingPanelRef?.current ?? document.body
    )
  }
)

export const SidePanel = withTriggerElement<HTMLDivElement>()<
  WithFloatingPanelBehavior<SidePanelInnerProps>
>(
  withFloatingPanelBehavior({
    animated: true,
    persistent: true,
    animationDuration: ANIMATION_DURATIONS.m,
  })(InnerSidePanel)
)
