import * as React from 'react'

import { Banner } from '../_internal/Banner'
import { IconButton } from '../IconButton'
import { palette } from '../palette'
import { Text } from '../Text'
import { Triangle } from '../Triangle'

import { AnnouncementBannerProps } from './AnnouncementBanner.interface'
import {
  AnnouncementBannerCenteredContent,
  AnnouncementBannerShapeContainer,
  AnnouncementBannerShadowBar,
  DesktopButton,
  MobileButton,
  DesktopCloseIconContainer,
  MobileCloseIconButton,
} from './AnnouncementBanner.style'

export const AnnouncementBanner = React.forwardRef<
  HTMLDivElement,
  AnnouncementBannerProps
>((props, ref) => {
  const { onValidate, onClose, message, validationLabel, ...rest } = props

  return (
    <Banner ref={ref} {...rest}>
      <AnnouncementBannerShapeContainer>
        <Triangle
          origin={{ top: 0, left: 0 }}
          width={240}
          height={240}
          color={palette.yellow[600]}
        />
        <Triangle
          origin={{ bottom: 0, left: 0 }}
          width={60}
          height={60}
          color={palette.blue[600]}
        />
        <Triangle
          origin={{ bottom: 0, right: -60 }}
          width={320}
          height={320}
          color={palette.yellow[600]}
        />
        <Triangle
          origin={{ top: 0, right: 0 }}
          width={120}
          height={120}
          color={palette.orange[500]}
        />
        <Triangle
          origin={{ bottom: 0, right: 0 }}
          width={60}
          height={60}
          color={palette.darkBlue[900]}
        />
      </AnnouncementBannerShapeContainer>
      <AnnouncementBannerCenteredContent>
        <Text opacity={1} markdown>
          {message}
        </Text>
        <DesktopButton onClick={onValidate} small>
          {validationLabel}
        </DesktopButton>
        <MobileButton onClick={onValidate} link>
          {validationLabel}
        </MobileButton>
      </AnnouncementBannerCenteredContent>
      <DesktopCloseIconContainer
        backgroundColor={palette.darkBlue[900]}
        simulated
      >
        <IconButton icon="close" onClick={onClose} />
      </DesktopCloseIconContainer>
      <MobileCloseIconButton>
        <IconButton icon="close" onClick={onClose} />
      </MobileCloseIconButton>
      <AnnouncementBannerShadowBar />
    </Banner>
  )
})
