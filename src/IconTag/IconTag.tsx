import * as React from 'react'

import { Icon } from '../Icon'
import { useHasColoredBackground } from '../useHasColoredBackground'

import { IconTagProps } from './IconTag.interface'
import { IconTagContainer, IconTagContent } from './IconTag.style'

export const IconTag = React.forwardRef<HTMLButtonElement, IconTagProps>(
  (props, ref) => {
    const { icon, large = false, bare = false, small = false, ...rest } = props

    const hasBackground = useHasColoredBackground()

    return (
      <IconTagContainer
        ref={ref}
        data-small={small}
        data-large={large}
        data-background={hasBackground}
        data-bare={bare}
        {...rest}
      >
        <IconTagContent>
          <Icon icon={icon} />
        </IconTagContent>
      </IconTagContainer>
    )
  }
)
