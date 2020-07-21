import useModal, { Modal } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import { ANIMATION_DURATIONS } from '../animations'
import Icon from '../Icon'
import withTriggerElement from '../withTriggerElement'

import { LightBoxInnerProps } from './LightBox.interface'
import { LightBoxContainer, CloseIconButton } from './LightBox.style'

const LightBox = React.forwardRef<HTMLDivElement, LightBoxInnerProps>(
  (props, ref) => {
    const {
      open,
      onClose,
      children,
      persistent,
      animated = true,
      ...rest
    } = props

    const modal = useModal<HTMLDivElement>({
      open,
      onClose,
      persistent,
      animated,
      animationDuration: ANIMATION_DURATIONS.l,
    })

    const content = (
      <LightBoxContainer
        ref={ref}
        backgroundColor="#FFFFFF"
        data-state={modal.state}
        {...rest}
      >
        <CloseIconButton onClick={modal.close}>
          <Icon icon="close" />
        </CloseIconButton>
        {isFunction(children)
          ? children(modal as Modal<HTMLDivElement>)
          : children}
      </LightBoxContainer>
    )

    return isClientSide
      ? ReactDOM.createPortal(content, document.body)
      : content
  }
)

export default withTriggerElement<HTMLDivElement>()<LightBoxInnerProps>(
  LightBox
)
