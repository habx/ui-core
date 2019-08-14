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

const Modal: React.FunctionComponent<ModalInnerProps> = ({
  open,
  onClose,
  children,
  title,
  animated = true,
  persistent = false,
  ...rest
}) => {
  const modal = useModal<HTMLDivElement>({
    open,
    onClose,
    persistent,
    animated,
    animationDuration: ANIMATION_DURATION,
  })

  const content = (
    <ModalOverlay data-state={modal.state} onClick={modal.overlayClick}>
      <ModalContainer backgroundColor="#FFFFFF" ref={modal.ref} {...rest}>
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

  return isClientSide ? ReactDOM.createPortal(content, document.body) : content
}

export default withTriggerElement(Modal)
