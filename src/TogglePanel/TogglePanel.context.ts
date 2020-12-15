import { Modal as ModalType } from '@delangle/use-modal'
import * as React from 'react'

export const Context = React.createContext<ModalType<HTMLDivElement> | null>(
  null
)
