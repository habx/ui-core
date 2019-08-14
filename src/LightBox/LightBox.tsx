import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import useModal, { ModalState } from '../_internal/useModal'
import Icon from '../Icon'
import { ANIMATION_DURATION } from '../Menu/Menu.style'
import withTriggerElement from '../withTriggerElement'

import { LightHouseInnerProps } from './LightBox.interface'
import { LightBoxOverlay, CloseIconContainer } from './LightBox.style'

const LightBox: React.FunctionComponent<LightHouseInnerProps> = ({
  open,
  onClose,
  children,
  ...rest
}) => {
  const modal = useModal<HTMLDivElement>({
    open,
    onClose,
    persistent: false,
    animated: true,
    animationDuration: ANIMATION_DURATION,
  })

  const content = (
    <LightBoxOverlay
      backgroundColor="#FFFFFF"
      data-state={modal.state}
      {...rest}
    >
      <CloseIconContainer onClick={modal.close}>
        <Icon icon="close" />
      </CloseIconContainer>
      {isFunction(children)
        ? children(modal as ModalState<HTMLDivElement>)
        : children}
    </LightBoxOverlay>
  )

  return isClientSide ? ReactDOM.createPortal(content, document.body) : content
}

export default withTriggerElement<HTMLDivElement>()(LightBox)
