import useModal from '@delangle/use-modal'
import * as React from 'react'

import { isFunction, isNil, isString } from '../_internal/data'
import { assert } from '../_internal/validityCheck'
import { ANIMATION_DURATIONS } from '../animations'
import { ExpansionPanelContext } from '../ExpansionPanel/ExpansionPanel.context'
import Icon from '../Icon'

import ExpansionPanelItemProps from './ExpansionPanelItem.interface'
import {
  ExpansionPanelItemContainer,
  HeaderBar,
  ExpansionPanelItemContent,
  CoreContent,
  HeaderBarElement,
  HeaderBarTitle,
  HeaderBarDescription,
} from './ExpansionPanelItem.style'

const ExpansionPanelItem = React.forwardRef<
  HTMLDivElement,
  ExpansionPanelItemProps
>((props, ref) => {
  const {
    children,
    title,
    open: rawOpen,
    header,
    onToggle,
    description,
    disabled,
    ...rest
  } = props

  const isControlled = !isNil(rawOpen)

  const {
    openedItems,
    setOpenedItems,
    multiOpen,
    light,
    isInsideAnExpansionPanel,
    expandIconPosition,
    size,
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
    animationDuration: open ? ANIMATION_DURATIONS.l : 0,
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
          setOpenedItems((prev) =>
            prev.includes(itemRef.current)
              ? prev.filter((i) => i !== itemRef.current)
              : [...prev, itemRef.current]
          )
        } else {
          setOpenedItems((prev) =>
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

  const headerTitle = isString(title) ? (
    <HeaderBarTitle>{title}</HeaderBarTitle>
  ) : (
    title
  )

  const expandIcon = (
    <React.Fragment>
      {panel.state === 'closed' && <Icon icon="chevron-south" />}
      {panel.state !== 'closed' && <Icon icon="chevron-north" />}
    </React.Fragment>
  )

  const headerDescription = isString(description) ? (
    <HeaderBarDescription>{description}</HeaderBarDescription>
  ) : (
    description
  )

  return (
    <ExpansionPanelItemContainer
      data-testid="expansion-panel-item"
      data-disabled={disabled}
      data-light={light}
      data-state={panel.state}
      {...rest}
      ref={ref}
    >
      <HeaderBar
        data-size={size}
        data-testid="expansion-panel-item-title-bar"
        onClick={handleToggle}
      >
        {header && (isFunction(header) ? header(panel) : header)}
        {!header && (
          <React.Fragment>
            {expandIconPosition === 'left' ? (
              <React.Fragment>
                <HeaderBarElement>
                  {expandIcon}
                  {headerTitle}
                </HeaderBarElement>
                <HeaderBarElement>{headerDescription}</HeaderBarElement>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <HeaderBarElement>
                  {headerTitle}
                  {headerDescription}
                </HeaderBarElement>
                <HeaderBarElement>{expandIcon}</HeaderBarElement>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </HeaderBar>
      <ExpansionPanelItemContent
        data-testid="expansion-panel-item-content"
        ref={contentRef}
        height={contentHeight}
        data-state={panel.state}
      >
        <CoreContent>
          {isFunction(children) ? children(panel) : children}
        </CoreContent>
      </ExpansionPanelItemContent>
    </ExpansionPanelItemContainer>
  )
})

export default ExpansionPanelItem
