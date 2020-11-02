import useModal, { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import { buildUseOnlyOpenedInstanceHook } from '../_internal/useOnlyOpenedInstance'
import { useWindowSize } from '../_internal/useWindowSize'
import { ANIMATION_DURATIONS } from '../animations'
import { breakpoints } from '../breakpoints'
import { Modal } from '../Modal'
import { withTriggerElement } from '../withTriggerElement'

import { MenuContext } from './Menu.context'
import { MenuInstance, MenuInnerProps } from './Menu.interface'
import {
  MenuContent,
  MenuContainer,
  MenuFullScreenContainer,
  MenuOverlay,
} from './Menu.style'

const useOnlyOneMenuOpened = buildUseOnlyOpenedInstanceHook<MenuInstance>()

const TRIGGER_MARGIN = 12

const InnerMenu = React.forwardRef<HTMLUListElement, MenuInnerProps>(
  (props, ref) => {
    const {
      children,
      open,
      onClose,
      triggerRef,
      fullScreenOnMobile = false,
      scrollable = false,
      position = 'vertical',
      withOverlay = true,
      setPosition,
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
      animationDuration: ANIMATION_DURATIONS.m,
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

      if (isFunction(setPosition)) {
        setPositionStyle(
          setPosition({ triggerDimensions, menuHeight, menuWidth })
        )
      } else {
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
      }
    }, [triggerRef, modal.ref, setPosition, position])

    React.useEffect(() => {
      if (open) {
        updatePosition()
      }
    }, [open, updatePosition])

    React.useEffect(() => {
      updatePosition()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size, children])

    if (!isClientSide) {
      return null
    }

    if (fullScreenOnMobile && size.width < breakpoints.raw.phone) {
      return (
        <MenuContext.Provider value={modal}>
          <Modal open={open} onClose={onClose}>
            <MenuFullScreenContainer>{content}</MenuFullScreenContainer>
          </Modal>
        </MenuContext.Provider>
      )
    }

    return ReactDOM.createPortal(
      <MenuContext.Provider value={modal}>
        {withOverlay && modal.state === 'opened' && <MenuOverlay />}
        <MenuContainer
          data-state={modal.state}
          style={positionStyle}
          ref={modal.ref}
          data-testid="menu-container"
          {...rest}
        >
          <MenuContent data-scrollable={scrollable}>{content}</MenuContent>
        </MenuContainer>
      </MenuContext.Provider>,
      document.body
    )
  }
)

export const Menu = withTriggerElement<HTMLUListElement>({ fowardRef: true })<
  MenuInnerProps
>(InnerMenu)
