import * as React from 'react'

import { NotificationList } from '../notify/NotificationList'
import { PromptModals } from '../prompt/PromptModals'

import { CssVariables } from './CssVariables'
import { ProviderProps } from './Provider.interface'

export const Provider: React.FunctionComponent<ProviderProps> = ({
  children,
}) => (
  <React.Fragment>
    {children}
    <NotificationList />
    <PromptModals />
    <CssVariables />
  </React.Fragment>
)
