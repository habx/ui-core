import * as React from 'react'

import { isFunction } from '../_internal/data'

import {
  WithTriggerElement,
  TriggerReceivedProps,
} from './withTriggerElement.interface'

const withTriggerElement = <RefElement extends HTMLElement>() => <
  Props extends {} = {}
>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Wrapper = React.forwardRef<
    RefElement,
    WithTriggerElement<Props, RefElement>
  >((props, ref) => {
    const { triggerElement, onClose, ...rest } = props as TriggerReceivedProps<
      RefElement
    >

    const [open, setOpen] = React.useState(false)

    const handleToggle = React.useCallback(
      () => setOpen(wasOpen => !wasOpen),
      []
    )

    const handleClose = React.useCallback(
      e => {
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

    return (
      <React.Fragment>
        {isFunction(triggerElement)
          ? triggerElement({ open })
          : React.cloneElement(triggerElement, { onClick: handleToggle })}
        <WrappedComponent
          ref={ref}
          {...(rest as Props)}
          open={open}
          onClose={handleClose as (e: React.SyntheticEvent<RefElement>) => void}
        />
      </React.Fragment>
    )
  })

  Wrapper.displayName = WrappedComponent.displayName || WrappedComponent.name

  return Wrapper
}

export default withTriggerElement
