import * as React from 'react'

export type ProviderContextValue = {
  confirmLabel: string
  cancelLabel: string
}

export const ProviderContext = React.createContext<ProviderContextValue>({
  confirmLabel: 'Valider',
  cancelLabel: 'Annuler',
})
