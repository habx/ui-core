import * as React from 'react'

import NotificationList from '../notify/NotificationList'
import PromptModals from '../prompt/PromptModals'

import CssVariables from './CssVariables'
import ThunderProviderProps from './Provider.interface'

const Provider: React.FunctionComponent<ThunderProviderProps> = ({
  children,
}) => (
  <React.Fragment>
    {children}
    <NotificationList />
    <PromptModals />
    <CssVariables />
  </React.Fragment>
)

export default Provider
