import * as React from 'react'

import useTheme from '../useTheme'
import withMarkdown from '../withMarkdown'

import TagProps from './Tag.interface'
import { TagContainer } from './Tag.style'

const Tag = React.forwardRef<HTMLButtonElement, TagProps>((props, ref) => {
  const { large, active, ...rest } = props

  const theme = useTheme()

  return (
    <TagContainer
      ref={ref}
      data-large={large}
      data-active={active}
      data-background={theme.backgroundColor !== '#FFFFFF'}
      {...rest}
    />
  )
})

export default withMarkdown<HTMLButtonElement>({ inline: true })<TagProps>(Tag)
