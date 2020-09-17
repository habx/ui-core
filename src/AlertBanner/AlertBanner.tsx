import * as React from 'react'

import Banner from '../_internal/Banner'
import IconButton from '../IconButton'
import palette from '../palette'

import AlertBannerProps from './AlertBanner.interface'
import { AlertBannerContent, AlertBannerText } from './AlertBanner.style'

export const AlertBanner = React.forwardRef<HTMLDivElement, AlertBannerProps>(
  (props, ref) => {
    const { warning, message, onClose, ...rest } = props

    const backgroundColor = warning
      ? palette.orange[400]
      : palette.lightBlue[500]

    return (
      <Banner ref={ref} backgroundColor={backgroundColor} {...rest}>
        <AlertBannerContent>
          <AlertBannerText opacity={1}>{message}</AlertBannerText>
          {onClose && <IconButton icon="close" tiny onClick={onClose} />}
        </AlertBannerContent>
      </Banner>
    )
  }
)
