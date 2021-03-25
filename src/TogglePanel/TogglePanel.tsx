import useModal, { ModalState } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { buildUseOnlyOneInstanceOpened } from '../_internal/buildUseOnlyOneInstanceOpened'
import { isFunction } from '../_internal/data'
import { useDisableScroll } from '../_internal/useDisableScroll'
import { useWindowSize } from '../_internal/useWindowSize'
import { ANIMATION_DURATIONS } from '../animations'
import { breakpoints } from '../breakpoints'
import { Modal } from '../Modal'
import { useCurrentBackground } from '../useCurrentBackground'
import { withTriggerElement } from '../withTriggerElement'

import { TogglePanelContext } from './TogglePanel.context'
import { InnerTogglePanelProps } from './TogglePanel.interface'
import { Container, Overlay } from './TogglePanel.style'

const {
  useOnlyOneInstanceOpened,
  useInstanceContext,
  InstanceProvider,
} = buildUseOnlyOneInstanceOpened()

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
    useDisableScroll(open)

    const modal = useModal<HTMLDivElement>({
      ref,
      open,
      onClose,
      persistent: false,
      animated: true,
      animationDuration: ANIMATION_DURATIONS.l,
    })

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

      const modalBoundingBox = modalElement.getBoundingClientRect()
      const triggerBoundingBox = triggerElement.getBoundingClientRect()

      const dimensions = {
        bottom: modalBoundingBox.bottom,
        clientHeight: modalElement.clientHeight,
        clientWidth: modalElement.clientWidth,
        height: modalBoundingBox.height,
        left: modalBoundingBox.left,
        right: modalBoundingBox.right,
        top: modalBoundingBox.top,
        width: modalBoundingBox.width,
      }

      const triggerDimensions = {
        bottom: triggerBoundingBox.bottom,
        clientHeight: triggerElement.clientHeight,
        clientWidth: triggerElement.clientWidth,
        height: triggerBoundingBox.height,
        left: triggerBoundingBox.left,
        right: triggerBoundingBox.right,
        top: triggerBoundingBox.top,
        width: triggerBoundingBox.width,
      }

      setCustomStyle({ ...setStyle(dimensions, triggerDimensions), ...style })
    }, [modal.ref, setStyle, shouldRenderModal, style, triggerRef])

    React.useEffect(() => {
      if (open) {
        updateStyle()
      }
    }, [open, updateStyle])

    React.useEffect(() => {
      if (open) {
        onOpen?.()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const size = useWindowSize()

    React.useEffect(updateStyle, [children, size]) // eslint-disable-line react-hooks/exhaustive-deps

    const parent = React.useContext(TogglePanelContext)

    const backgroundColor = useCurrentBackground({ useRootTheme: true })

    if (!shouldRenderModal) {
      return null
    }

    const content = (
      <InstanceProvider id={instanceId} onClose={onClose}>
        {isFunction(children) ? children(modal) : children}
      </InstanceProvider>
    )

    if (fullScreenOnMobile && size.width < breakpoints.raw.phone) {
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
