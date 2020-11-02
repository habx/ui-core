import * as React from 'react'
import styled from 'styled-components'

import { isNil, isString } from '../_internal/data'

import { TriangleProps, Position } from './Triangle.interface'

const TriangleContainer = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
`

const cleanPosition = (position: Position | undefined): string => {
  if (isNil(position)) {
    return 'unset'
  }

  if (isString(position)) {
    return position as string
  }

  return `${position}px`
}

export const Triangle = React.forwardRef<HTMLDivElement, TriangleProps>(
  (props, ref) => {
    const { origin, width, height, color, ...rest } = props

    const position = React.useMemo<[string, string, string, string]>(() => {
      if (!isNil(origin.bottom) && !isNil(origin.right)) {
        return ['0px', '0px', cleanPosition(height), cleanPosition(width)]
      }

      if (!isNil(origin.bottom) && !isNil(origin.left)) {
        return ['0px', cleanPosition(width), cleanPosition(height), '0px']
      }

      if (!isNil(origin.top) && !isNil(origin.right)) {
        return [cleanPosition(height), '0px', '0px', cleanPosition(width)]
      }

      if (!isNil(origin.top) && !isNil(origin.left)) {
        return [cleanPosition(height), cleanPosition(width), '0px', '0px']
      }

      return ['0px', '0px', '0px', '0px']
    }, [height, origin.bottom, origin.left, origin.right, origin.top, width])

    return (
      <TriangleContainer
        {...rest}
        ref={ref}
        style={{
          top: cleanPosition(origin.top),
          right: cleanPosition(origin.right),
          bottom: cleanPosition(origin.bottom),
          left: cleanPosition(origin.left),
          borderWidth: position.join(' '),
          borderColor: `${color} transparent ${color} transparent`,
        }}
      />
    )
  }
)
