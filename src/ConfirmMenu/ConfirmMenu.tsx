import * as React from 'react'

import { useMergedRef } from '../_internal/useMergedRef'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { ProviderContext } from '../Provider'
import { TogglePanelStyleSetter } from '../TogglePanel'

import { ConfirmMenuProps } from './ConfirmMenu.interface'
import { ConfirmMenuContainer } from './ConfirmMenu.style'

export const ConfirmMenu = React.forwardRef<HTMLDivElement, ConfirmMenuProps>(
  (props, ref) => {
    const {
      children,
      onClose = () => {},
      onConfirm = () => {},
      triggerRef: customTriggerRef,
      textual = false,
      position = 'right',
      childrenRefPropName = 'ref',
      ...rest
    } = props

    const triggerRef = useMergedRef(customTriggerRef)
    const containerRef = useMergedRef(ref)

    const content = React.isValidElement(children)
      ? React.cloneElement(children, {
          [childrenRefPropName]: triggerRef,
        })
      : children

    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
      if (!triggerRef?.current) {
        return
      }

      const handleFocus = () => setOpen(true)

      const handleBlur = (e: FocusEvent) => {
        if (
          !e.relatedTarget ||
          !containerRef.current?.contains(e.relatedTarget as Node)
        ) {
          setOpen(false)
        }
      }

      const node = triggerRef.current

      node.addEventListener('focusin', handleFocus)
      node.addEventListener('focusout', handleBlur)

      return () => {
        node.removeEventListener('focusin', handleFocus)
        node.removeEventListener('focusout', handleBlur)
      }
    }, [containerRef, triggerRef])

    const context = React.useContext(ProviderContext)

    const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(false)
      onConfirm(e)
    }

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(false)
      onClose(e)
    }

    const styleSetter = React.useCallback<TogglePanelStyleSetter>(
      (dimensions, triggerDimensions) => {
        return {
          top: triggerDimensions.bottom + 8,
          left:
            position === 'right'
              ? triggerDimensions.right - dimensions.clientWidth
              : triggerDimensions.left,
        }
      },
      [position]
    )

    return (
      <React.Fragment>
        {content}
        <ConfirmMenuContainer
          data-textual={textual}
          data-testid="confirm-menu"
          withOverlay={false}
          onClose={() => {}}
          open={open}
          ref={containerRef}
          triggerRef={triggerRef}
          setStyle={styleSetter}
          {...rest}
        >
          {textual ? (
            <React.Fragment>
              <Button secondary ghost small onClick={handleClose}>
                {context.cancelLabel}
              </Button>
              <Button secondary ghost small onClick={handleConfirm}>
                {context.confirmLabel}
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <IconButton
                icon="close"
                small
                onClick={handleClose}
                data-testid="confirm-menu-close"
              />
              <IconButton
                icon="check"
                small
                onClick={handleConfirm}
                data-testid="confirm-menu-confirm"
              />
            </React.Fragment>
          )}
        </ConfirmMenuContainer>
      </React.Fragment>
    )
  }
)
