import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import useModal, { ModalState } from '../_internal/useModal'
import Icon from '../Icon'
import withTriggerElement from '../withTriggerElement'

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

    const modal = useModal<HTMLDivElement>({
      ref,
      open,
      onClose,
      persistent,
      animated,
      animationDuration: ANIMATION_DURATION,
    })

    const content = (
      <ModalOverlay
        data-state={modal.state}
        onClick={modal.overlayClick}
        data-testid="modal-overlay"
      >
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
            {isFunction(children)
              ? children(modal as ModalState<HTMLDivElement>)
              : children}
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

export default withTriggerElement<HTMLDivElement>()(Modal)
