import * as React from 'react'

import { ExpansionPanelContext } from './ExpansionPanel.context'
import ExpansionPanelProps, {
  ExpansionPanelContextType,
} from './ExpansionPanel.interface'
import { ExpansionPanelContainer } from './ExpansionPanel.style'

export const ExpansionPanel = React.forwardRef<
  HTMLDivElement,
  ExpansionPanelProps
>((props, ref) => {
  const {
    children,
    disabled = false,
    multiOpen = false,
    light = false,
    small = false,
    large = false,
    expandIconPosition = 'left',
    ...rest
  } = props

  const [openedItems, setOpenedItems] = React.useState<number[]>([])

  const size = React.useMemo(() => {
    if (large) {
      return 'large'
    }
    if (small) {
      return 'small'
    }
    return 'regular'
  }, [large, small])

  const contextValue = React.useMemo<ExpansionPanelContextType>(
    () => ({
      openedItems,
      setOpenedItems,
      multiOpen,
      light,
      isInsideAnExpansionPanel: true,
      size,
      expandIconPosition,
    }),
    [size, expandIconPosition, light, multiOpen, openedItems]
  )

  return (
    <ExpansionPanelContext.Provider value={contextValue}>
      <ExpansionPanelContainer {...rest} data-disabled={disabled} ref={ref}>
        {children}
      </ExpansionPanelContainer>
    </ExpansionPanelContext.Provider>
  )
})
