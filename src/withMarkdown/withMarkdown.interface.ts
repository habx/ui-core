import * as React from 'react'

export interface WithMarkdownConfig {
  inline?: boolean
}

export interface WithMarkdownReceivedProps {
  markdown?: boolean
  children?: React.ReactNode
}
