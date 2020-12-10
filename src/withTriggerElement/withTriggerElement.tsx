import * as React from 'react'

import { isFunction } from '../_internal/data'
import { useMergedRef } from '../_internal/useMergedRef'

import {
  WithTriggerElement,
  TriggerReceivedProps,
  TriggerInjectedProps,
  TriggerElementConfig,
} from './withTriggerElement.interface'

export const withTriggerElement = <RefElement extends HTMLElement>(
  config: TriggerElementConfig = {}
) => <Props extends TriggerInjectedProps = TriggerInjectedProps>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const { forwardRef = false } = config

  const Wrapper = React.forwardRef<
    RefElement,
    WithTriggerElement<Props, RefElement>
  >((props, ref) => {
    const {
      triggerElement,
      triggerRef: rawTriggerRef,
      onClose,
      ...rest
    } = props as TriggerReceivedProps<RefElement>

    const [open, setOpen] = React.useState(false)
    const triggerRef = useMergedRef(rawTriggerRef)

    const handleClose = React.useCallback(
      (e: React.SyntheticEvent<RefElement>) => {
        if (isFunction(onClose)) {
          onClose(e)
        }

        setOpen(false)
      },
      [onClose]
    )

    const fullTriggerElement = React.useMemo(() => {
      const handleToggle = () => setOpen((wasOpen) => !wasOpen)

      if (!triggerElement) {
        return null
      }

      if (isFunction(triggerElement)) {
        return triggerElement({
          open,
          onClick: handleToggle,
          ...(forwardRef ? { ref: triggerRef } : {}),
        })
      }

      return React.cloneElement(triggerElement, {
        onClick: handleToggle,
        ref: triggerRef,
      })
    }, [triggerElement, triggerRef, open])

    if (!fullTriggerElement) {
      return (
        <WrappedComponent
          {...(rest as Props)}
          onClose={onClose}
          ref={ref}
          triggerRef={rawTriggerRef}
        />
      )
    }

    return (
      <React.Fragment>
        {fullTriggerElement}
        <WrappedComponent
          triggerRef={triggerRef}
          ref={ref}
          {...(rest as Props)}
          open={open}
          onClose={handleClose}
        />
      </React.Fragment>
    )
  })

  Wrapper.displayName = WrappedComponent.displayName || WrappedComponent.name

  return Wrapper
}
