import * as React from 'react'

import { ProviderContextValue } from './Provider.interface'

export const ProviderContext = React.createContext<ProviderContextValue>({
  confirmLabel: 'Valider',
  cancelLabel: 'Annuler',
})
