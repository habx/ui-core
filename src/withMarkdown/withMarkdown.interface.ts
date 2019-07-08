import * as React from 'react'

export interface WithMarkdownConfig {
  inline?: boolean | ((props: { [key: string]: any }) => boolean)
}

export interface WithMarkdownReceivedProps {
  markdown?: boolean
  children?: React.ReactNode
}
