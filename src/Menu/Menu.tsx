import useModal from '@delangle/use-modal'
import * as React from 'react'

import withTriggerElement from '../withTriggerElement'

import MenuProps from './Menu.interface'
import { MenuContainer, ANIMATION_DURATION } from './Menu.style'

const Menu = React.forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
  const { children, open, onClose, ...rest } = props

  const modal = useModal<HTMLUListElement>({
    ref,
    open,
    onClose,
    persistent: false,
    animated: true,
    animationDuration: ANIMATION_DURATION,
  })

  return (
    <MenuContainer {...rest} data-state={modal.state} ref={modal.ref}>
      {children}
    </MenuContainer>
  )
})

export default withTriggerElement<HTMLUListElement>()(Menu)
