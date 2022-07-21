import * as React from 'react'

import { getHTMLFromMarkdown } from './withMarkdown.utils'

const Markdown = React.forwardRef<HTMLElement, MarkdownProps>(
  ({ Component, isInline, children, ...props }, ref) => (
    <Component
      ref={ref}
      {...props}
      dangerouslySetInnerHTML={{
        __html: getHTMLFromMarkdown({
          children: children,
          inline: isInline,
        }),
      }}
    />
  )
)

interface MarkdownProps {
  Component: React.ForwardRefExoticComponent<any>
  isInline: boolean
  children: string
}

export default Markdown
