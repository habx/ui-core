import useModal, { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import useWindowSize from '../_internal/useWindowSize'
import breakpoints from '../breakpoints'
import Modal from '../Modal'
import withTriggerElement from '../withTriggerElement'

import { MenuInstance, MenuInnerProps } from './Menu.interface'
import {
  MenuContent,
  MenuContainer,
  MenuFullScreenContainer,
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

const VERTICAL_TRIGGER_MARGIN = 12

const Menu = React.forwardRef<HTMLUListElement, MenuInnerProps>(
  (props, ref) => {
    const {
      children,
      open,
      onClose,
      fullScreenOnMobile = false,
      triggerRef,
      ...rest
    } = props

    const size = useWindowSize()
    useOnlyOneMenuOpened({ open, onClose })
    const [position, setPosition] = React.useState<React.CSSProperties>()

    const modal = useModal<HTMLUListElement>({
      ref,
      open,
      onClose,
      persistent: false,
      animated: true,
      animationDuration: ANIMATION_DURATION,
    })

    const content = isFunction(children)
      ? children(modal as ModalType<HTMLUListElement>)
      : children

    const updatePosition = React.useCallback(() => {
      if (!triggerRef?.current || !modal.ref?.current) {
        return
      }

      const triggerDimensions = triggerRef.current.getBoundingClientRect()
      const menuHeight = modal.ref.current.clientHeight
      const menuWidth = modal.ref.current.clientWidth

      let top = triggerDimensions.bottom + VERTICAL_TRIGGER_MARGIN

      if (top + menuHeight > window.innerHeight) {
        const topAboveTrigger =
          triggerDimensions.top - VERTICAL_TRIGGER_MARGIN - menuHeight

        if (topAboveTrigger > 0) {
          top = topAboveTrigger
        }
      }

      let left =
        triggerDimensions.left + menuWidth > window.innerWidth
          ? triggerDimensions.left - menuWidth + triggerDimensions.width
          : triggerDimensions.left

      setPosition({ top, left })
    }, [triggerRef, modal.ref])

    React.useEffect(() => {
      if (open) {
        updatePosition()
      }
    }, [open, updatePosition])

    React.useEffect(() => {
      updatePosition()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size])

    if (!isClientSide) {
      return null
    }

    if (fullScreenOnMobile && size.width < breakpoints.raw.phone) {
      return (
        <Modal open={open} onClose={onClose}>
          <MenuFullScreenContainer>{content}</MenuFullScreenContainer>
        </Modal>
      )
    }

    return ReactDOM.createPortal(
      <MenuContainer
        style={position}
        data-full-screen-on-mobile={fullScreenOnMobile}
        data-state={modal.state}
        ref={modal.ref}
        {...rest}
      >
        <MenuContent>{content}</MenuContent>
      </MenuContainer>,
      document.body
    )
  }
)

export default withTriggerElement<HTMLUListElement>({ fowardRef: true })<
  MenuInnerProps
>(Menu)
