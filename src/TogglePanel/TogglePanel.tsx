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

const Context = React.createContext({ close() {} })

const InnerTogglePanel = React.forwardRef<
  HTMLDivElement,
  InnerTogglePanelProps
>(
  (
    {
      children,
      fullScreenOnMobile = false,
      open,
      onClose,
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
      if (!setStyle || !triggerRef?.current || !modal.ref?.current) {
        return
      }

      const dimensions = modal.ref.current.getBoundingClientRect()
      const triggerDimensions = triggerRef.current.getBoundingClientRect()

      setCustomStyle({ ...style, ...setStyle(dimensions, triggerDimensions) })
    }, [modal.ref, style, triggerRef])

    React.useEffect(() => {
      if (open) {
        updateStyle()
      }
    }, [open, updateStyle])

    const size = useWindowSize()

    React.useEffect(updateStyle, [children, size]) // eslint-disable-line react-hooks/exhaustive-deps

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
        document.body
      )
    )
  }
)

export const TogglePanel = withTriggerElement({ fowardRef: true })(
  InnerTogglePanel
)

interface InnerTogglePanelProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?:
    | React.ReactNode
    | ((modal: ModalType<HTMLDivElement>) => React.ReactNode)
  fullScreenOnMobile?: boolean
  onClose: () => void
  open: boolean
  setStyle?: (
    dimensions: DOMRect,
    triggerDimensions: DOMRect
  ) => React.CSSProperties
  triggerRef?: React.RefObject<HTMLElement | null>
  withOverlay?: boolean
}

export type TogglePanelProps = WithTriggerElement<
  InnerTogglePanelProps,
  HTMLDivElement
>
