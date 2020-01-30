import * as React from 'react'
import { isFragment } from 'react-is'

const getFlattenedChildren = (children: React.ReactNode) => {
  const flatten = (current: React.ReactNode) => {
    if (!current) {
      return []
    }

    const result: React.ReactNode[] = []

    React.Children.forEach(current, child => {
      if (isFragment(child)) {
        result.push(...flatten(child.props.children))
      } else {
        result.push(child)
      }
    })

    return result
  }

  return flatten(children).filter(child => !!child)
}

export default getFlattenedChildren
