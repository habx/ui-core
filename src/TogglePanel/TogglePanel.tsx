import useModal, { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isFunction } from '../_internal/data'
import { isClientSide } from '../_internal/ssr'
import { useWindowSize } from '../_internal/useWindowSize'
import { ANIMATION_DURATIONS } from '../animations'
import { breakpoints } from '../breakpoints'
import { Modal } from '../Modal'
import { WithTriggerElement, withTriggerElement } from '../withTriggerElement'

import { Container, Overlay } from './TogglePanel.style'

const Context = React.createContext<ModalType<HTMLDivElement> | null>(null)

const InnerTogglePanel = React.forwardRef<
  HTMLDivElement,
  InnerTogglePanelProps
>(
  (
    {
      children,
      fullScreenOnMobile = false,
      onClose,
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

    const modal = useModal<HTMLDivElement>({
      ref,
      open,
      onClose,
      persistent: false,
      animated: true,
      animationDuration: ANIMATION_DURATIONS.m,
    })

    const updateStyle = React.useCallback(() => {
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
    }, [modal.ref, style, triggerRef])

    React.useEffect(() => {
      if (open) {
        updateStyle()
      }
    }, [open, updateStyle])

    const size = useWindowSize()

    React.useEffect(updateStyle, [children, size]) // eslint-disable-line react-hooks/exhaustive-deps

    const parent = React.useContext(Context)

    if (!isClientSide) {
      return null
    }

    const content = isFunction(children) ? children(modal) : children

    return fullScreenOnMobile && size.width < breakpoints.raw.phone ? (
      <Context.Provider value={modal}>
        <Modal onClose={onClose} open={open}>
          {content}
        </Modal>
      </Context.Provider>
    ) : (
      ReactDOM.createPortal(
        <Context.Provider value={modal}>
          {withOverlay && modal.state === 'opened' && <Overlay />}

          <Container
            data-state={modal.state}
            ref={modal.ref}
            style={customStyle}
            {...props}
          >
            {content}
          </Container>
        </Context.Provider>,
        parent?.ref.current ?? document.body
      )
    )
  }
)

export const TogglePanel = withTriggerElement({ forwardRef: true })(
  InnerTogglePanel
)

interface InnerTogglePanelProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?:
    | React.ReactNode
    | ((modal: ModalType<HTMLDivElement>) => React.ReactNode)
  fullScreenOnMobile?: boolean
  onClose: () => void
  onOpen?: () => void
  open: boolean
  setStyle?: (
    dimensions: Dimensions,
    triggerDimensions: Dimensions
  ) => React.CSSProperties
  triggerRef?: React.RefObject<HTMLElement | null>
  withOverlay?: boolean
}

export type TogglePanelProps = WithTriggerElement<
  InnerTogglePanelProps,
  HTMLDivElement
>

export interface Dimensions {
  bottom: number
  clientHeight: number
  clientWidth: number
  height: number
  left: number
  right: number
  top: number
  width: number
}
