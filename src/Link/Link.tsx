import * as React from 'react'

import withMarkdown from '../withMarkdown'

import LinkProps from './Link.interface'
import { LinkContainer } from './Link.style'

const NEW_TAB_PROPS = {
  target: '_BLANK',
  rel: 'noopener noreferrer',
}

const Link: React.FunctionComponent<LinkProps> = ({ newTab, ...props }) => {
  const additionalProps = newTab ? NEW_TAB_PROPS : {}

  return <LinkContainer {...additionalProps} {...props} />
}

export default withMarkdown({ inline: true })(Link)
