import * as React from 'react'

import { useUniqID } from './useUniqId'

export interface InstanceStatus {
  open: boolean
  onClose: () => void
  id: string
}

export interface InstanceContextValue {
  parentIds: string[]
  close: () => void
}

export interface ProviderProps {
  id: string
  onClose: () => void
}

export const buildUseOnlyOneInstanceOpened = () => {
  let instances: React.MutableRefObject<InstanceStatus>[] = []

  const InstanceContext = React.createContext<InstanceContextValue>({
    parentIds: [],
    close: () => {},
  })

  const useInstanceContext = () => React.useContext(InstanceContext)

  const useOnlyOneInstanceOpened = (
    inputInstanceStatus: Omit<InstanceStatus, 'id'>
  ) => {
    const instanceId = useUniqID()
    const { parentIds } = useInstanceContext()

    const instanceStatus: InstanceStatus = {
      ...inputInstanceStatus,
      id: instanceId,
    }

    const instanceStatusRef = React.useRef<InstanceStatus>(instanceStatus)
    instanceStatusRef.current = instanceStatus

    React.useEffect(() => {
      instances.push(instanceStatusRef)

      return () => {
        instances = instances.filter((i) => i !== instanceStatusRef)
      }
    }, [])

    React.useEffect(() => {
      if (instanceStatus.open) {
        instances.forEach((instanceToClose) => {
          if (
            instanceToClose !== instanceStatusRef &&
            !parentIds.includes(instanceToClose.current.id) &&
            instanceToClose.current.open
          ) {
            instanceToClose.current.onClose()
          }
        })
      }
    }, [instanceStatus.open]) // eslint-disable-line react-hooks/exhaustive-deps

    return instanceId
  }

  const InstanceProvider: React.FunctionComponent<ProviderProps> = ({
    id,
    onClose,
    children,
  }) => {
    const { parentIds } = useInstanceContext()

    const contextValue = React.useMemo<InstanceContextValue>(
      () => ({ parentIds: [...parentIds, id], close: onClose }),
      [id, onClose, parentIds]
    )

    return (
      <InstanceContext.Provider value={contextValue}>
        {children}
      </InstanceContext.Provider>
    )
  }

  return { useOnlyOneInstanceOpened, useInstanceContext, InstanceProvider }
}
