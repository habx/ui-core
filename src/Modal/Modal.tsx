import useModal, { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import { withTogglePanelReset } from '../_internal/withTogglePanelReset'
import { ANIMATION_DURATIONS } from '../animations'
import { RoundIconButton } from '../RoundIconButton'
import { Title } from '../Title'
import { useCurrentBackground } from '../useCurrentBackground'
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
      open,
      onClose,
      children,
      title,
      animated = true,
      persistent = false,
      width = 'regular',
      value,
      ...rest
    } = props

    const modal = useModal({
      ref,
      open,
      onClose,
      persistent,
      value,
      animated,
      animationDuration: ANIMATION_DURATIONS.m,
    })

    const backgroundColor = useCurrentBackground({ useRootTheme: true })

    if (!modal.hasAlreadyBeenOpened || !isClientSide) {
      return null
    }

    return ReactDOM.createPortal(
      <ModalOverlay data-state={modal.state} data-testid="modal-overlay">
        <ModalContainer
          backgroundColor={backgroundColor}
          ref={modal.ref}
          data-testid="modal-container"
          data-width={width}
          {...rest}
        >
          <HeaderBarContainer>
            {title ? (
              <Title type="section">
                Choisissez les prestations des appartements
              </Title>
            ) : (
              <div />
            )}
            <RoundIconButton onClick={modal.close} icon="close" />
          </HeaderBarContainer>
          <ModalContent>
            <ModalScrollableContent>
              {isFunction(children) ? children(modal as ModalType) : children}
            </ModalScrollableContent>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>,
      document.body
    )
  }
)

export const Modal = withTogglePanelReset(
  withTriggerElement<HTMLDivElement>()<ModalInnerProps>(InnerModal)
)
