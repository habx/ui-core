import * as React from 'react'

import Banner from '../_internal/Banner'
import palette from '../palette'
import Text from '../Text'

import AlertBannerProps from './AlertBanner.interface'
import { AlertBannerContent } from './AlertBanner.style'

const AlertBanner = React.forwardRef<HTMLDivElement, AlertBannerProps>(
  (props, ref) => {
    const { warning, message, ...rest } = props

    const backgroundColor = warning
      ? palette.orange[400]
      : palette.lightBlue[500]

    return (
      <Banner ref={ref} backgroundColor={backgroundColor} {...rest}>
        <AlertBannerContent>
          <Text opacity={1}>{message}</Text>
        </AlertBannerContent>
      </Banner>
    )
  }
)

export default AlertBanner
