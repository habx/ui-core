import * as React from 'react'

import { Banner } from '../_internal/Banner'
import { IconButton } from '../IconButton'

import { AlertBannerProps } from './AlertBanner.interface'
import { AlertBannerContent, AlertBannerText } from './AlertBanner.style'

export const AlertBanner = React.forwardRef<HTMLDivElement, AlertBannerProps>(
  (props, ref) => {
    const { message, warning, primary, success, error, onClose, ...rest } =
      props

    return (
      <Banner ref={ref} {...rest}>
        <AlertBannerContent
          data-warning={warning}
          data-error={error}
          data-success={success}
          data-primary={primary}
        >
          <AlertBannerText variation="title">{message}</AlertBannerText>
          {onClose && <IconButton icon="close" tiny onClick={onClose} />}
        </AlertBannerContent>
      </Banner>
    )
  }
)
