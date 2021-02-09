import { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'

export const TogglePanelContext = React.createContext<ModalType<HTMLDivElement> | null>(
  null
)
