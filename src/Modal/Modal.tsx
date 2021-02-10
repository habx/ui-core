import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { ANIMATION_DURATIONS } from '../animations'
import { RoundIconButton } from '../RoundIconButton'
import { Title } from '../Title'
import { useCurrentBackground } from '../useCurrentBackground'
import {
  withFloatingPanelBehavior,
  WithFloatingPanelBehavior,
} from '../withFloatingPanelBehavior'
import { withTriggerElement } from '../withTriggerElement'

import { ModalInnerProps } from './Modal.interface'
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalScrollableContent,
  HeaderBarContainer,
} from './Modal.style'

const InnerModal = React.forwardRef<HTMLDivElement, ModalInnerProps>(
  (props, ref) => {
    const {
      modal,
      parentFloatingPanelRef,
      children,
      title,
      width = 'regular',
      ...rest
    } = props

    const backgroundColor = useCurrentBackground({ useRootTheme: true })

    if (!modal.hasAlreadyBeenOpened) {
      return null
    }

    return ReactDOM.createPortal(
      <ModalOverlay
        data-state={modal.state}
        data-testid="modal-overlay"
        style={
          {
            '--modal-animation-duration': `${modal.animationDuration}ms`,
          } as React.CSSProperties
        }
      >
        <ModalContainer
          backgroundColor={backgroundColor}
          ref={ref}
          data-testid="modal-container"
          data-width={width}
          {...rest}
        >
          <HeaderBarContainer>
            {title ? <Title type="section">{title}</Title> : <div />}
            <RoundIconButton onClick={modal.close} icon="close" />
          </HeaderBarContainer>
          <ModalContent>
            <ModalScrollableContent>
              {isFunction(children) ? children(modal) : children}
            </ModalScrollableContent>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>,
      parentFloatingPanelRef?.current ?? document.body
    )
  }
)

export const Modal = withTriggerElement<HTMLDivElement>()<
  WithFloatingPanelBehavior<ModalInnerProps>
>(
  withFloatingPanelBehavior({
    animated: true,
    persistent: false,
    animationDuration: ANIMATION_DURATIONS.m,
  })(InnerModal)
)
