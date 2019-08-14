import * as React from 'react'

import { isFunction } from '../_internal/data'
import DesignSystemTheme from '../theme/theme.interface'
import useTheme from '../useTheme'

import {
  WithMarkdownConfig,
  WithMarkdownReceivedProps,
} from './withMarkdown.interface'
import { parseFull, parseInline } from './withMarkdown.utils'

const parse = ({
  inline,
  theme,
  children,
}: {
  inline: boolean
  theme: DesignSystemTheme
  children: string
}) => {
  const env = {
    theme,
  }

  const mdParse = inline ? parseInline : parseFull

  return mdParse(children || '', env)
}

const withMarkdown = <
  RefElement extends HTMLElement,
  ExtraProps extends {} = {}
>({ inline = false }: WithMarkdownConfig = {}) => <Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Component = React.forwardRef<
    RefElement,
    Props & WithMarkdownReceivedProps & ExtraProps
  >((props, ref) => {
    const { markdown, children, ...rest } = props
    const theme = useTheme()

    if (!markdown) {
      return (
        <WrappedComponent {...(rest as Props)}>{children}</WrappedComponent>
      )
    }

    const isInline = isFunction(inline) ? inline(props) : !!inline

    return (
      <WrappedComponent
        ref={ref}
        {...(rest as Props)}
        data-markdown
        dangerouslySetInnerHTML={{
          __html: parse({
            children: children as string,
            inline: isInline,
            theme,
          }),
        }}
      />
    )
  })

  return Component
}

export default withMarkdown
