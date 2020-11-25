import * as React from 'react'

import { Banner } from '../_internal/Banner'
import { IconButton } from '../IconButton'
import { useThemeVariant } from '../useThemeVariant'

import { AlertBannerProps } from './AlertBanner.interface'
import { AlertBannerContent, AlertBannerText } from './AlertBanner.style'

export const AlertBanner = React.forwardRef<HTMLDivElement, AlertBannerProps>(
  (props, ref) => {
    const { warning, message, onClose, ...rest } = props

    const theme = useThemeVariant()

    const backgroundColor = warning
      ? theme.colors.warning.base
      : theme.colors.primary.calm

    return (
      <Banner ref={ref} backgroundColor={backgroundColor} {...rest}>
        <AlertBannerContent>
          <AlertBannerText variation="title">{message}</AlertBannerText>
          {onClose && <IconButton icon="close" tiny onClick={onClose} />}
        </AlertBannerContent>
      </Banner>
    )
  }
)
