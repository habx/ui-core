import * as React from 'react'

import { Context as TogglePanelContext } from '../TogglePanel/TogglePanel.context'
import { WithLabel } from '../withLabel'

export const withTogglePanelReset = <
  RefElement extends HTMLDivElement,
  Props extends object
>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Field = React.forwardRef<RefElement, WithLabel<Props>>((props, ref) => {
    const toggleParent = React.useContext(TogglePanelContext)

    if (toggleParent) {
      return (
        <TogglePanelContext.Provider value={null}>
          <WrappedComponent {...props} ref={ref} />
        </TogglePanelContext.Provider>
      )
    }

    return <WrappedComponent {...props} ref={ref} />
  })

  return Field
}
