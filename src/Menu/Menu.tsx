import useModal, { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'

import { isFunction } from '../_internal/data'
import useWindowSize from '../_internal/useWindowSize'
import breakpoints from '../breakpoints'
import withTriggerElement from '../withTriggerElement'

import { MenuInstance, MenuInnerProps } from './Menu.interface'
import {
  MenuTriggerContainer,
  MenuContent,
  MenuContainer,
  MenuFullScreenDesktop,
  ANIMATION_DURATION,
} from './Menu.style'

let instances: React.MutableRefObject<MenuInstance>[] = []

const useOnlyOneMenuOpened = (menu: MenuInstance) => {
  const instance = React.useRef<MenuInstance>(menu)

  React.useEffect(() => {
    instance.current = menu
  }, [menu])

  React.useEffect(() => {
    instances.push(instance)

    return () => {
      instances = instances.filter((i) => i !== instance)
    }
  }, [instance])

  React.useEffect(() => {
    instances.forEach((instanceToClose) => {
      if (
        menu.open &&
        instanceToClose !== instance &&
        instanceToClose.current.open &&
        instanceToClose.current.onClose
      ) {
        instanceToClose.current.onClose(
          {} as React.SyntheticEvent<HTMLUListElement, Event>
        )
      }
    })
  }, [menu.open])
}

const Menu = React.forwardRef<HTMLUListElement, MenuInnerProps>(
  (props, ref) => {
    const {
      children,
      open,
      onClose,
      fullScreenOnMobile = false,
      position = 'bottom-left',
      triggerElement,
      ...rest
    } = props
    const { width } = useWindowSize()

    useOnlyOneMenuOpened({ open, onClose })

    const modal = useModal<HTMLUListElement>({
      ref,
      open,
      onClose,
      persistent: false,
      animated: true,
      animationDuration: ANIMATION_DURATION,
    })

    return (
      <MenuTriggerContainer>
        {triggerElement}
        <MenuContainer
          data-full-screen-on-mobile={fullScreenOnMobile}
          data-position={position}
          data-state={modal.state}
          ref={modal.ref}
          {...rest}
        >
          <MenuContent>
            {isFunction(children)
              ? children(modal as ModalType<HTMLUListElement>)
              : children}
          </MenuContent>
        </MenuContainer>
        {fullScreenOnMobile && width < breakpoints.raw.phone && (
          <MenuFullScreenDesktop open={open} onClose={onClose}>
            {isFunction(children)
              ? children(modal as ModalType<HTMLUListElement>)
              : children}
          </MenuFullScreenDesktop>
        )}
      </MenuTriggerContainer>
    )
  }
)

export default withTriggerElement<HTMLUListElement>({
  passTriggerElementAsProp: true,
})<MenuInnerProps>(Menu)
