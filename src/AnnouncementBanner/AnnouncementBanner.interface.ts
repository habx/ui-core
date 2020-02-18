import * as React from 'react'

export default interface AnnouncementBannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  validationLabel: string
  message: string
  onValidate: () => void
  onClose: () => void
  open: boolean
}
