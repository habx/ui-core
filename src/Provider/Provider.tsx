import * as React from 'react'

import NotificationList from '../notify/NotificationList'
import PromptModals from '../prompt/PromptModals'

import ThunderProviderProps from './Provider.interface'

const Provider: React.FunctionComponent<ThunderProviderProps> = ({
  children,
}) => (
  <React.Fragment>
    {children}
    <NotificationList />
    <PromptModals />
  </React.Fragment>
)

export default Provider
