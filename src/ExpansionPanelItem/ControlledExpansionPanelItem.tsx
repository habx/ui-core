import useModal from '@delangle/use-modal'
import * as React from 'react'

import { isFunction, isString } from '../_internal/data'
import { assert } from '../_internal/validityCheck'
import { ANIMATION_DURATIONS } from '../animations'
import { ExpansionPanelContext } from '../ExpansionPanel/ExpansionPanel.context'
import { Icon } from '../Icon'

import { ControlledExpansionPanelItemProps } from './ExpansionPanelItem.interface'
import {
  ExpansionPanelItemContainer,
  HeaderBar,
  ExpansionPanelItemContent,
  CoreContent,
  HeaderBarElement,
  HeaderBarTitle,
  HeaderBarDescription,
} from './ExpansionPanelItem.style'

export const ControlledExpansionPanelItem = React.forwardRef<
  HTMLDivElement,
  ControlledExpansionPanelItemProps
>((props, ref) => {
  const {
    children,
    title,
    open,
    onToggle,
    header,
    description,
    disabled,
    sticky,
    ...rest
  } = props

  const {
    light,
    isInsideAnExpansionPanel,
    expandIconPosition,
    size,
  } = React.useContext(ExpansionPanelContext)

  assert(
    isInsideAnExpansionPanel,
    'ExpansionPanelItem & ControlledExpansionPanelItem should be used inside an ExpansionPanel'
  )

  const contentRef = React.useRef<HTMLDivElement>(null)
  const [contentHeight, setItemHeight] = React.useState(0)
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
      data-size={size}
      {...rest}
      ref={ref}
    >
      <HeaderBar
        data-testid="expansion-panel-item-title-bar"
        onClick={onToggle}
        data-sticky={open && sticky}
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
        data-state={panel.state}
        style={
          {
            '--expansion-panel-content-height': `${contentHeight}px`,
          } as React.CSSProperties
        }
      >
        <CoreContent>
          {isFunction(children) ? children(panel) : children}
        </CoreContent>
      </ExpansionPanelItemContent>
    </ExpansionPanelItemContainer>
  )
})
