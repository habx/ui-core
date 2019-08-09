import * as React from 'react'

import { isFunction } from '../_internal/data'

import {
  WithTriggerElement,
  TriggerReceivedProps,
} from './withTriggerElement.interface'

const withTriggerElement = <Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Wrapper: React.FunctionComponent<WithTriggerElement<Props>> = props => {
    const { triggerElement, onClose, ...rest } = props as TriggerReceivedProps

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
          {...(rest as Props)}
          open={open}
          onClose={handleClose}
        />
      </React.Fragment>
    )
  }

  Wrapper.displayName = WrappedComponent.displayName || WrappedComponent.name

  Wrapper.defaultProps = WrappedComponent.defaultProps

  Wrapper.propTypes = WrappedComponent.propTypes

  return Wrapper
}

export default withTriggerElement
