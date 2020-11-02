import * as React from 'react'

import { withMarkdown } from '../withMarkdown'

import { LinkProps } from './Link.interface'
import { LinkContainer } from './Link.style'

const NEW_TAB_PROPS = {
  target: '_BLANK',
  rel: 'noopener noreferrer',
}

const InnerLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { newTab, ...rest } = props

    const additionalProps = newTab ? NEW_TAB_PROPS : {}

    return <LinkContainer ref={ref} {...additionalProps} {...rest} />
  }
)

export const Link = withMarkdown<HTMLAnchorElement>({ inline: true })<
  LinkProps
>(InnerLink)
