import useModal from '@delangle/use-modal'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { isClientSide } from '../_internal/ssr'
import { Text } from '../Text'
import { useThemeVariant } from '../useThemeVariant'

import { useTooltip, useOnlyOneTooltipOpened } from './Tooltip.hooks'
import { TooltipProps, TooltipVisibilityState } from './Tooltip.interface'
import { ANIMATION_DURATION, TooltipContainer } from './Tooltip.style'

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const {
      title,
      description,
      children,
      small = false,
      onClick,
      backgroundStyle = 'dark',
      triggerRef,
      ...rest
    } = props

    const [state, actions, refs] = useTooltip(props, ref, triggerRef)
    const theme = useThemeVariant()

    const isOpen = state.visibilityState === TooltipVisibilityState.Visible
    const modal = useModal<HTMLDivElement>({
      open: isOpen,
      onClose: () => {},
      persistent: true,
      animated: true,
      animationDuration: ANIMATION_DURATION,
    })

    useOnlyOneTooltipOpened({ open: isOpen, onClose: actions.onMouseLeave })

    const content = React.isValidElement(children)
      ? React.cloneElement(children, {
          ref: refs.trigger,
          onMouseEnter: actions.onMouseEnter,
          onMouseLeave: actions.onMouseLeave,
          ...(onClick ? { onClick } : {}),
        })
      : children

    /**
     * Needed to prevent onMouseLeave breaking cases like scroll or resizes
     * Checks if the mouse is moving inside of the trigger element every 500ms
     */
    React.useEffect(() => {
      if (refs.trigger && isOpen) {
        const node = refs.trigger?.current
        const onMouseLeave = actions.onMouseLeave
        if (node) {
          let timeoutRef: number
          const onDocumentMouseMove = (e: MouseEvent) => {
            if (!node.contains(e.target as Node)) {
              onMouseLeave()
            } else {
              timeoutRef = addAsyncMouseListener()
            }
          }
          const addAsyncMouseListener = () =>
            setTimeout(
              () =>
                document.addEventListener('mousemove', onDocumentMouseMove, {
                  once: true,
                }),
              500
            )

          timeoutRef = addAsyncMouseListener()

          return () => clearTimeout(timeoutRef)
        }
      }
    }, [actions.onMouseLeave, isOpen, refs.trigger])

    React.useEffect(() => {
      if (triggerRef) {
        const node = triggerRef.current
        if (node) {
          node.addEventListener('mouseover', actions.onMouseEnter)
          node.addEventListener('mouseout', actions.onMouseLeave)

          return () => {
            node.removeEventListener('mouseover', actions.onMouseEnter)
            node.removeEventListener('mouseout', actions.onMouseLeave)
          }
        }
      }
    }, [actions.onMouseEnter, actions.onMouseLeave, triggerRef])

    return (
      <React.Fragment>
        {content}
        {isClientSide &&
          state.visibilityState !== TooltipVisibilityState.NotInstantiated &&
          ReactDOM.createPortal(
            <TooltipContainer
              ref={refs.tooltip}
              backgroundColor={
                backgroundStyle === 'light'
                  ? theme.neutralColor.withIntensityFading[100]
                  : theme.neutralColor.withIntensityFading[700]
              }
              data-has-description={!!description}
              data-state={modal.state}
              style={state.position}
              {...rest}
            >
              <Text variation="title" type={small ? 'caption' : 'regular'}>
                {title}
              </Text>
              {description && (
                <Text type={small ? 'caption' : 'regular'}>{description}</Text>
              )}
            </TooltipContainer>,
            document.body
          )}
      </React.Fragment>
    )
  }
)
