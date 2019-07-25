import * as React from 'react'

import useTheme from '../useTheme'
import withMarkdown from '../withMarkdown'

import TagProps from './Tag.interface'
import { TagContainer } from './Tag.style'

const Tag: React.FunctionComponent<TagProps> = ({
  large,
  active,
  ...props
}) => {
  const theme = useTheme()

  return (
    <TagContainer
      data-large={large}
      data-active={active}
      data-background={theme.backgroundColor !== '#FFFFFF'}
      {...props}
    />
  )
}

export default withMarkdown({ inline: true })(Tag)
