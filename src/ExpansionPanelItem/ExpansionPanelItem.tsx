import useModal from '@delangle/use-modal'
import * as React from 'react'

import { isFunction, isNil } from '../_internal/data'
import { assert } from '../_internal/validityCheck'
import { ExpansionPanelContext } from '../ExpansionPanel/ExpansionPanel.context'
import Icon from '../Icon'
import Title from '../Title'

import ExpansionPanelItemProps from './ExpansionPanelItem.interface'
import {
  ExpansionPanelItemContainer,
  TitleBar,
  ExpansionPanelItemContent,
  CoreContent,
  ANIMATION_DURATION,
} from './ExpansionPanelItem.style'

const ExpansionPanelItem = React.forwardRef<
  HTMLDivElement,
  ExpansionPanelItemProps
>((props, ref) => {
  const {
    children,
    title,
    expandIcon,
    collapseIcon,
    open: rawOpen,
    header,
    onToggle,
    ...rest
  } = props

  const isControlled = !isNil(rawOpen)

  const {
    openedItems,
    setOpenedItems,
    multiOpen,
    isInsideAnExpansionPanel,
  } = React.useContext(ExpansionPanelContext)

  assert(
    isInsideAnExpansionPanel,
    'ExpansionPanelItem should be used inside an ExpansionPanel'
  )

  const itemRef = React.useRef(Math.random())
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [contentHeight, setItemHeight] = React.useState(0)
  const open = isControlled ? rawOpen : openedItems.includes(itemRef.current)
  const panel = useModal({
    open,
    persistent: true,
    animated: true,
    animationDuration: open ? ANIMATION_DURATION : 0,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useLayoutEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight

      if (height !== contentHeight) {
        setItemHeight(height)
      }
    }
  })

  const handleToggle = React.useCallback(
    (e?: React.MouseEvent) => {
      if (!isControlled) {
        if (multiOpen) {
          setOpenedItems(prev =>
            prev.includes(itemRef.current)
              ? prev.filter(i => i !== itemRef.current)
              : [...prev, itemRef.current]
          )
        } else {
          setOpenedItems(prev =>
            prev.includes(itemRef.current) ? [] : [itemRef.current]
          )
        }
      }

      if (isFunction(onToggle)) {
        onToggle(e)
      }
    },
    [isControlled, onToggle, multiOpen, setOpenedItems]
  )

  return (
    <ExpansionPanelItemContainer
      data-testid="expansion-panel-item"
      {...rest}
      ref={ref}
    >
      <TitleBar
        data-testid="expansion-panel-item-title-bar"
        onClick={handleToggle}
      >
        {header}
        {!header && (
          <React.Fragment>
            {title && <Title type="regular">{title}</Title>}
            {panel.state === 'closed' &&
              (expandIcon || <Icon icon="chevron-south" />)}
            {panel.state !== 'closed' &&
              (collapseIcon || <Icon icon="chevron-north" />)}
          </React.Fragment>
        )}
      </TitleBar>
      <ExpansionPanelItemContent
        data-testid="expansion-panel-item-content"
        ref={contentRef}
        height={contentHeight}
        data-state={panel.state}
      >
        <CoreContent>
          {isFunction(children)
            ? children({ open: ['open', 'opening'].includes(panel.state) })
            : children}
        </CoreContent>
      </ExpansionPanelItemContent>
    </ExpansionPanelItemContainer>
  )
})

export default ExpansionPanelItem
