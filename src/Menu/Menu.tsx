import * as React from 'react'

import useModal from '../_internal/useModal'
import withTriggerElement from '../withTriggerElement'

import MenuProps from './Menu.interface'
import { MenuContainer, ANIMATION_DURATION } from './Menu.style'

const Menu: React.FunctionComponent<MenuProps> = ({
  children,
  open,
  onClose,
  ...props
}) => {
  const modal = useModal<HTMLUListElement>({
    open,
    onClose,
    persistent: false,
    animated: true,
    animationDuration: ANIMATION_DURATION,
  })

  React.useEffect(() => {
    window.addEventListener('click', modal.overlayClick)

    return () => {
      window.removeEventListener('click', modal.overlayClick)
    }
  }, [modal.overlayClick])

  return (
    <MenuContainer {...props} data-open={open} ref={modal.ref}>
      {children}
    </MenuContainer>
  )
}

export default withTriggerElement<HTMLUListElement>()(Menu)
