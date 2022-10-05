import useModal, { ModalState } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { buildUseOnlyOneInstanceOpened } from '../_internal/buildUseOnlyOneInstanceOpened'
import { isFunction } from '../_internal/data'
import { useDisableScroll } from '../_internal/useDisableScroll'
import { ANIMATION_DURATIONS } from '../animations'
import { breakpoints } from '../breakpoints'
import { Modal } from '../Modal'
import { useCurrentBackground } from '../useCurrentBackground'
import { useWindowSize } from '../useWindowSize'
import { withTriggerElement } from '../withTriggerElement'

import { TogglePanelContext } from './TogglePanel.context'
import { InnerTogglePanelProps } from './TogglePanel.interface'
import { Container, Overlay } from './TogglePanel.style'

const { useOnlyOneInstanceOpened, useInstanceContext, InstanceProvider } =
  buildUseOnlyOneInstanceOpened()

export const useParentTogglePanel = useInstanceContext

const InnerTogglePanel = React.forwardRef<
  HTMLDivElement,
  InnerTogglePanelProps
>(
  (
    {
      children,
      fullScreenOnMobile = false,
      onClose,
      onOpen,
      open,
      setStyle,
      style,
      triggerRef,
      withOverlay = true,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState(style)

    const instanceId = useOnlyOneInstanceOpened({ open, onClose })

    const modal = useModal<HTMLDivElement>({
      ref,
      open,
      onClose,
      persistent: false,
      animated: true,
      animationDuration: ANIMATION_DURATIONS.l,
    })

    useDisableScroll({ enabled: open, ignoreRef: modal.ref })

    const shouldRenderModal = modal.hasAlreadyBeenOpened

    const updateStyle = React.useCallback(() => {
      if (!shouldRenderModal) {
        return undefined
      }

      const modalElement = modal.ref?.current
      const triggerElement = triggerRef?.current

      if (!setStyle || !triggerElement || !modalElement) {
        return setCustomStyle(style)
      }

      const modalBoundingRect = modalElement.getBoundingClientRect()
      const triggerBoundingRect = triggerElement.getBoundingClientRect()

      setCustomStyle({
        ...setStyle(
          {
            /*
             * The dimensions returned by `getBoundingClientRect` take into account CSS transformations.
             * `offsetWidth` and `offsetHeight` includes scrollbars and borders.
             * Overriding the width and height prevents wrong placement of the panel, especially during opening transitions.
             */
            bottom: modalBoundingRect.bottom,
            height: modalElement.offsetHeight,
            left: modalBoundingRect.left,
            right: modalBoundingRect.right,
            top: modalBoundingRect.top,
            width: modalElement.offsetWidth,
          },
          {
            bottom: triggerBoundingRect.bottom,
            height: triggerBoundingRect.height,
            left: triggerBoundingRect.left,
            right: triggerBoundingRect.right,
            top: triggerBoundingRect.top,
            width: triggerBoundingRect.width,
          }
        ),
        ...style,
      })
    }, [modal.ref, setStyle, shouldRenderModal, triggerRef])

    const parent = React.useContext(TogglePanelContext)
    const backgroundColor = useCurrentBackground({ useRootTheme: true })
    const dimension = useWindowSize()

    React.useEffect(() => {
      updateStyle()
    }, [dimension, open, updateStyle])

    React.useEffect(() => {
      if (open) {
        onOpen?.()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    if (!shouldRenderModal) {
      return null
    }

    const content = (
      <InstanceProvider id={instanceId} onClose={onClose}>
        {isFunction(children) ? children(modal) : children}
      </InstanceProvider>
    )

    if (fullScreenOnMobile && dimension.width < breakpoints.raw.phone) {
      return (
        <TogglePanelContext.Provider value={modal}>
          <Modal onClose={onClose} open={open}>
            {content}
          </Modal>
        </TogglePanelContext.Provider>
      )
    }

    return ReactDOM.createPortal(
      <TogglePanelContext.Provider value={modal}>
        {withOverlay && modal.state === ModalState.opened && <Overlay />}
        <Container
          backgroundColor={backgroundColor}
          data-state={modal.state}
          ref={modal.ref}
          style={customStyle}
          {...props}
        >
          {content}
        </Container>
      </TogglePanelContext.Provider>,
      parent?.ref.current ?? document.body
    )
  }
)

export const TogglePanel = withTriggerElement<HTMLDivElement>({
  forwardRef: true,
})(InnerTogglePanel)
