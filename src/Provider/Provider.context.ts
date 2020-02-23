import * as React from 'react'

export type ProviderContextValue = {
  confirmLabel: string
  cancelLabel: string
}

const ProviderContext = React.createContext<ProviderContextValue>({
  confirmLabel: 'Valider',
  cancelLabel: 'Annuler',
})

export default ProviderContext
