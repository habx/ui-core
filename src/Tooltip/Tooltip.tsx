import useModal from '@delangle/use-modal'
import * as React from 'react'

import useMousePosition from '../_internal/useMousePosition'
import palette from '../palette'
import Text from '../Text'

import TooltipProps, {
  TooltipWithTriggerElementProps,
} from './Tooltip.interface'
import {
  ANIMATION_DURATION,
  TooltipContainer,
  TooltipTriggerContainer,
  TooltipTriggerContent,
  TooltipTriggerCursorWrapper,
} from './Tooltip.style'

const TooltipWithTriggerElement: React.FunctionComponent<
  TooltipWithTriggerElementProps
> = ({
  tooltip,
  hasDescription,
  followCursor = false,
  triggerElement: rawTrigger,
}) => {
  const [isHovered, setHovered] = React.useState<boolean>(false)
  const mousePosition = useMousePosition({ skip: !followCursor || !isHovered })

  const modal = useModal<HTMLDivElement>({
    open: isHovered,
    onClose: () => {},
    persistent: true,
    animated: true,
    animationDuration: ANIMATION_DURATION,
  })

  const handleMouseEnter = React.useCallback(() => setHovered(true), [])
  const handleMouseLeave = React.useCallback(() => setHovered(false), [])

  const trigger = React.cloneElement(rawTrigger, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  })

  const contentRef = React.useRef<HTMLDivElement>(null)
  const tooltipHalfWidth = contentRef.current
    ? contentRef.current.clientWidth / 2
    : 0
  return (
    <TooltipTriggerContainer data-state={modal.state}>
      {trigger}
      <TooltipTriggerContent
        data-has-description={hasDescription}
        data-follow-cursor={followCursor}
      >
        {followCursor ? (
          <TooltipTriggerCursorWrapper
            ref={contentRef}
            style={{
              position: 'fixed' as 'fixed',
              transform: `translate(${
                tooltipHalfWidth && tooltipHalfWidth - mousePosition.x > 0
                  ? '50%'
                  : `${mousePosition.x}px`
              }, ${mousePosition.y -
                (hasDescription ? 24 : 12)}px) translateX(-50%)`,
              top: 0,
              left: 0,
              pointerEvents: 'none' as 'none',
            }}
          >
            {tooltip}
          </TooltipTriggerCursorWrapper>
        ) : (
          tooltip
        )}
      </TooltipTriggerContent>
    </TooltipTriggerContainer>
  )
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const { title, description, small, children, followCursor, ...rest } = props

  const hasDescription = !!description

  const tooltip = (
    <TooltipContainer
      ref={ref}
      backgroundColor={palette.darkBlue[700]}
      data-has-description={hasDescription}
      {...rest}
    >
      <Text opacity={1} type={small ? 'caption' : 'regular'}>
        {title}
      </Text>
      {description && (
        <Text type={small ? 'caption' : 'regular'}>{description}</Text>
      )}
    </TooltipContainer>
  )

  if (!React.isValidElement(children)) {
    return tooltip
  }

  return (
    <TooltipWithTriggerElement
      tooltip={tooltip}
      triggerElement={children}
      hasDescription={hasDescription}
      followCursor={followCursor}
    />
  )
})

export default Tooltip
