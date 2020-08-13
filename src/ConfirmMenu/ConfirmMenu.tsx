import * as React from 'react'

import Button from '../Button'
import IconButton from '../IconButton'
import { ProviderContext } from '../Provider'

import ConfirmMenuProps from './ConfirmMenu.interface'
import { ConfirmMenuContent, Menu } from './ConfirmMenu.style'

const ConfirmMenu = React.forwardRef<HTMLUListElement, ConfirmMenuProps>(
  (props, ref) => {
    const {
      children,
      onClose = () => {},
      onConfirm = () => {},
      triggerRef: customTriggerRef,
      textual,
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

    const context = React.useContext(ProviderContext)

    return (
      <React.Fragment>
        {content}
        <Menu
          data-textual={textual}
          data-testid="confirm-menu"
          withOverlay={false}
          onClose={() => {}}
          open={true || open}
          ref={ref}
          triggerRef={triggerRef}
          position="horizontal"
          {...rest}
        >
          <ConfirmMenuContent data-testid="confirm-menu-content">
            {textual ? (
              <React.Fragment>
                <Button secondary link onClick={onClose}>
                  {context.cancelLabel}
                </Button>
                <Button link onClick={onConfirm}>
                  {context.confirmLabel}
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
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
              </React.Fragment>
            )}
          </ConfirmMenuContent>
        </Menu>
      </React.Fragment>
    )
  }
)

export default ConfirmMenu
