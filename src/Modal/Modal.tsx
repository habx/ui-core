import useModal, { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import Icon from '../Icon'
import withTriggerElement from '../withTriggerElement'

import { ModalProps } from './index'
import { ModalInnerProps } from './Modal.interface'
import {
  ModalOverlay,
  ModalContainer,
  TitleContainer,
  DesktopTitle,
  MobileTitle,
  ModalContent,
  CloseIconContainer,
  ANIMATION_DURATION,
} from './Modal.style'

const Modal = React.forwardRef<HTMLDivElement, ModalInnerProps>(
  (props, ref) => {
    const {
      open,
      onClose,
      children,
      title,
      animated = true,
      persistent = false,
      alwaysRenderChildren = false,
      ...rest
    } = props

    const modal = useModal({
      ref,
      open,
      onClose,
      persistent,
      animated,
      animationDuration: ANIMATION_DURATION,
    })

    const content = (
      <ModalOverlay data-state={modal.state} data-testid="modal-overlay">
        <ModalContainer
          backgroundColor="#FFFFFF"
          ref={modal.ref}
          data-testid="modal-container"
          {...rest}
        >
          <CloseIconContainer onClick={modal.close}>
            <Icon icon="close" />
          </CloseIconContainer>
          {title && (
            <TitleContainer>
              <DesktopTitle type="section">{title}</DesktopTitle>
              <MobileTitle type="regular">{title}</MobileTitle>
            </TitleContainer>
          )}
          <ModalContent>
            {isFunction(children) ? children(modal as ModalType) : children}
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>
    )

    if (!alwaysRenderChildren && !modal.hasAlreadyBeenOpened) {
      return null
    }

    return isClientSide
      ? ReactDOM.createPortal(content, document.body)
      : content
  }
)

export default withTriggerElement<HTMLDivElement>()<ModalProps>(Modal)
