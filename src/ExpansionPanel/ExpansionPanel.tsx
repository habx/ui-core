import * as React from 'react'

import { ExpansionPanelContext } from './ExpansionPanel.context'
import ExpansionPanelProps, {
  ExpansionPanelContextType,
} from './ExpansionPanel.interface'
import { ExpansionPanelContainer } from './ExpansionPanel.style'

const ExpansionPanel = React.forwardRef<HTMLDivElement, ExpansionPanelProps>(
  (props, ref) => {
    const {
      children,
      disabled = false,
      multiOpen = false,
      light = false,
      ...rest
    } = props

    const [openedItems, setOpenedItems] = React.useState<number[]>([])

    const contextValue = React.useMemo<ExpansionPanelContextType>(
      () => ({
        openedItems,
        setOpenedItems,
        multiOpen,
        light,
        isInsideAnExpansionPanel: true,
      }),
      [light, multiOpen, openedItems]
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
