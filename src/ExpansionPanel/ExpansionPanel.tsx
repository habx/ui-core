import * as React from 'react'

import { ExpansionPanelContext } from './ExpansionPanel.context'
import ExpansionPanelProps from './ExpansionPanel.interface'
import { ExpansionPanelContainer } from './ExpansionPanel.style'

const ExpansionPanel = React.forwardRef<HTMLDivElement, ExpansionPanelProps>(
  (props, ref) => {
    const { children, disabled, multiOpen, ...rest } = props

    const [openedItems, setOpenedItems] = React.useState([] as number[])

    const contextValue = React.useMemo(
      () => ({
        openedItems,
        setOpenedItems,
        multiOpen,
        isInsideAnExpansionPanel: true,
      }),
      [multiOpen, openedItems]
    )

    return (
      <ExpansionPanelContext.Provider value={contextValue}>
        <ExpansionPanelContainer {...rest} data-disabled={disabled} ref={ref}>
          {children}
        </ExpansionPanelContainer>
      </ExpansionPanelContext.Provider>
    )
  }
)

export default ExpansionPanel
