import * as React from 'react'

import IconButton from '../IconButton'

import ConfirmMenuProps from './ConfirmMenu.interface'
import { ConfirmMenuContent, Menu } from './ConfirmMenu.style'

const ConfirmMenu = React.forwardRef<HTMLUListElement, ConfirmMenuProps>(
  (props, ref) => {
    const {
      children,
      onClose = () => {},
      onConfirm = () => {},
      triggerRef: customTriggerRef,
      ...rest
    } = props

    const localTriggerRef = React.useRef<HTMLDivElement>(null)
    const triggerRef = customTriggerRef ?? localTriggerRef
    const content = React.isValidElement(children)
      ? React.cloneElement(children, {
          ref: triggerRef,
        })
      : children

    const [open, setOpen] = React.useState(false)
    const handleFocus = () => setOpen(true)
    const handleBlur = () => setOpen(false)
    React.useEffect(() => {
      if (triggerRef) {
        const node = triggerRef.current
        if (node) {
          node.addEventListener('focus', handleFocus)
          node.addEventListener('blur', handleBlur)

          return () => {
            node.removeEventListener('focus', handleFocus)
            node.removeEventListener('blur', handleBlur)
          }
        }
      }
    }, [triggerRef])

    return (
      <React.Fragment>
        {content}
        <Menu
          data-testid="confirm-menu"
          withOverlay={false}
          onClose={() => {}}
          open={open}
          ref={ref}
          triggerRef={triggerRef}
          position="horizontal"
          {...rest}
        >
          <ConfirmMenuContent data-testid="confirm-menu-content">
            <IconButton
              icon="close"
              tiny
              onClick={onClose}
              data-testid="confirm-menu-close"
            />
            <IconButton
              icon="check"
              tiny
              onClick={onConfirm}
              data-testid="confirm-menu-confirm"
            />
          </ConfirmMenuContent>
        </Menu>
      </React.Fragment>
    )
  }
)

export default ConfirmMenu
