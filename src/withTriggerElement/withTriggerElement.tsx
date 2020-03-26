import * as React from 'react'

import { isFunction } from '../_internal/data'

import {
  WithTriggerElement,
  TriggerReceivedProps,
  TriggerElementConfig,
} from './withTriggerElement.interface'

const withTriggerElement = <RefElement extends HTMLElement>(
  config: TriggerElementConfig = {}
) => <Props extends {} = {}>(WrappedComponent: React.ComponentType<Props>) => {
  const { passTriggerElementAsProp = false } = config

  const Wrapper = React.forwardRef<
    RefElement,
    WithTriggerElement<Props, RefElement>
  >((props, ref) => {
    const { triggerElement, onClose, ...rest } = props as TriggerReceivedProps<
      RefElement
    >

    const [open, setOpen] = React.useState(false)

    const handleToggle = React.useCallback(
      () => setOpen((wasOpen) => !wasOpen),
      []
    )

    const handleClose = React.useCallback(
      (e: React.SyntheticEvent<RefElement>) => {
        if (isFunction(onClose)) {
          onClose(e)
        }

        setOpen(false)
      },
      [onClose]
    )

    if (!triggerElement) {
      return <WrappedComponent {...(rest as Props)} onClose={onClose} />
    }

    const fullTriggerElement = isFunction(triggerElement)
      ? triggerElement({ open, onClick: handleToggle })
      : React.cloneElement(triggerElement, { onClick: handleToggle })

    return (
      <React.Fragment>
        {!passTriggerElementAsProp && fullTriggerElement}
        <WrappedComponent
          ref={ref}
          {...(rest as Props)}
          {...(passTriggerElementAsProp && {
            triggerElement: fullTriggerElement,
          })}
          open={open}
          onClose={handleClose}
        />
      </React.Fragment>
    )
  })

  Wrapper.displayName = WrappedComponent.displayName || WrappedComponent.name

  return Wrapper
}

export default withTriggerElement
