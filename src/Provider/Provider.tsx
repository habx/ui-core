import * as React from 'react'

// import ConfirmModals from '../confirm/ConfirmModals'
import NotificationList from '../notify/NotificationList'

import ThunderProviderProps from './Provider.interface'

const Provider: React.FunctionComponent<ThunderProviderProps> = ({
  children,
}) => {
  return (
    <React.Fragment>
      {children}
      {/* <ConfirmModals /> */}
      <NotificationList />
    </React.Fragment>
  )
}

export default Provider
