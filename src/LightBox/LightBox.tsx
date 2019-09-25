import useModal, { Modal } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import Icon from '../Icon'
import { ANIMATION_DURATION } from '../Menu/Menu.style'
import withTriggerElement from '../withTriggerElement'

import { LightHouseInnerProps } from './LightBox.interface'
import { LightBoxOverlay, CloseIconContainer } from './LightBox.style'

const LightBox = React.forwardRef<HTMLDivElement, LightHouseInnerProps>(
  (props, ref) => {
    const { open, onClose, children, ...rest } = props

    const modal = useModal<HTMLDivElement>({
      open,
      onClose,
      persistent: false,
      animated: true,
      animationDuration: ANIMATION_DURATION,
    })

    const content = (
      <LightBoxOverlay
        ref={ref}
        backgroundColor="#FFFFFF"
        data-state={modal.state}
        {...rest}
      >
        <CloseIconContainer onClick={modal.close}>
          <Icon icon="close" />
        </CloseIconContainer>
        {isFunction(children)
          ? children(modal as Modal<HTMLDivElement>)
          : children}
      </LightBoxOverlay>
    )

    return isClientSide
      ? ReactDOM.createPortal(content, document.body)
      : content
  }
)

export default withTriggerElement<HTMLDivElement>()<LightBoxProps>(LightBox)
