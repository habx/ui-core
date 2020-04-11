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
  instance.current = menu

  React.useEffect(() => {
    instances.push(instance)

    return () => {
      instances = instances.filter((i) => i !== instance)
    }
  }, [])

  React.useEffect(() => {
    if (menu.open) {
      instances.forEach((instanceToClose) => {
        if (instanceToClose !== instance && instanceToClose.current.open) {
          instanceToClose.current.onClose()
        }
      })
    }
  }, [menu.open])
}

const TRIGGER_MARGIN = 12

const Menu = React.forwardRef<HTMLUListElement, MenuInnerProps>(
  (props, ref) => {
    const {
      children,
      open,
      onClose,
      triggerRef,
      fullScreenOnMobile = false,
      position = 'vertical',
      ...rest
    } = props

    const size = useWindowSize()
    useOnlyOneMenuOpened({ open, onClose })
    const [positionStyle, setPositionStyle] = React.useState<
      React.CSSProperties
    >()

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

      if (position === 'vertical') {
        let top = triggerDimensions.bottom + TRIGGER_MARGIN

        if (top + menuHeight > window.innerHeight) {
          const topWithMenuAboveTrigger =
            triggerDimensions.top - TRIGGER_MARGIN - menuHeight

          if (topWithMenuAboveTrigger > 0) {
            top = topWithMenuAboveTrigger
          }
        }

        let left =
          triggerDimensions.left + menuWidth > window.innerWidth
            ? triggerDimensions.left - menuWidth + triggerDimensions.width
            : triggerDimensions.left

        setPositionStyle({ top, left, minWidth: triggerDimensions.width })
      } else {
        const top =
          triggerDimensions.top + menuHeight > window.innerHeight
            ? triggerDimensions.top + triggerDimensions.height - menuHeight
            : triggerDimensions.top

        let left = triggerDimensions.right + TRIGGER_MARGIN

        if (left + menuWidth > window.innerWidth) {
          const leftWithMenuLeftOfTrigger =
            triggerDimensions.left - menuWidth - TRIGGER_MARGIN

          if (leftWithMenuLeftOfTrigger > 0) {
            left = leftWithMenuLeftOfTrigger
          }
        }

        setPositionStyle({ top, left })
      }
    }, [position, triggerRef, modal.ref])

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
        style={positionStyle}
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
