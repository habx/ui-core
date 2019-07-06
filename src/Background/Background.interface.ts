import * as React from 'react'

export default interface BackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor: string
  opacity?: number
}
