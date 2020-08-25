import * as React from 'react'

import Button from '../Button'
import IconButton from '../IconButton'
import { ProviderContext } from '../Provider'

import ConfirmMenuProps from './ConfirmMenu.interface'
import { ConfirmMenuContent, Menu } from './ConfirmMenu.style'

export const ConfirmMenu = React.forwardRef<HTMLUListElement, ConfirmMenuProps>(
  (props, ref) => {
    const {
      children,
      onClose = () => {},
      onConfirm = () => {},
      triggerRef: customTriggerRef,
      textual,
      position = 'right',
      ...rest
    } = props

    const localTriggerRef = React.useRef<HTMLDivElement>(null)
    const triggerRef = customTriggerRef ?? localTriggerRef
    const content = React.isValidElement(children)
      ? React.cloneElement(children, {
          ref: triggerRef,
        })
      : children

    const confirmMenuContentRef = React.useRef<HTMLDivElement>(null)

    const [open, setOpen] = React.useState(false)
    const handleFocus = () => setOpen(true)
    const handleBlur = (e: FocusEvent) => {
      if (
        !e.relatedTarget ||
        !confirmMenuContentRef.current?.contains(e.relatedTarget as Node)
      ) {
        setOpen(false)
      }
    }

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

    const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(false)
      onConfirm(e)
    }

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(false)
      onClose(e)
    }
    return (
      <React.Fragment>
        {content}
        <Menu
          data-textual={textual}
          data-testid="confirm-menu"
          withOverlay={false}
          onClose={() => {}}
          open={open}
          ref={ref}
          triggerRef={triggerRef}
          setPosition={(dimension) => ({
            top: dimension.triggerDimensions.bottom + 8,
            left:
              position === 'right'
                ? dimension.triggerDimensions.right - dimension.menuWidth
                : dimension.triggerDimensions.left,
          })}
          {...rest}
        >
          <ConfirmMenuContent
            data-testid="confirm-menu-content"
            ref={confirmMenuContentRef}
          >
            {textual ? (
              <React.Fragment>
                <Button secondary link onClick={handleClose}>
                  {context.cancelLabel}
                </Button>
                <Button link onClick={handleConfirm}>
                  {context.confirmLabel}
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <IconButton
                  icon="close"
                  tiny
                  onClick={handleClose}
                  data-testid="confirm-menu-close"
                />
                <IconButton
                  icon="check"
                  tiny
                  onClick={handleConfirm}
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
