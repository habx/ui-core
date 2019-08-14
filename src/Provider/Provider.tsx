import * as React from 'react'

import NotificationList from '../notify/NotificationList'

import ThunderProviderProps from './Provider.interface'

const Provider: React.FunctionComponent<ThunderProviderProps> = ({
  children,
}) => (
  <React.Fragment>
    {children}
    <NotificationList />
  </React.Fragment>
)

export default Provider
