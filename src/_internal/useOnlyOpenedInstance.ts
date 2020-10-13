import * as React from 'react'

export interface OpenableInstance {
  open: boolean
  onClose: () => void
}

const buildUseOnlyOpenedInstanceHook = <
  Instance extends OpenableInstance
>() => {
  let instances: React.MutableRefObject<Instance>[] = []

  const useOnlyOneMenuOpened = (currentInstance: Instance) => {
    const instance = React.useRef<Instance>(currentInstance)
    instance.current = currentInstance

    React.useEffect(() => {
      instances.push(instance)

      return () => {
        instances = instances.filter((i) => i !== instance)
      }
    }, [])

    React.useEffect(() => {
      if (currentInstance.open) {
        instances.forEach((instanceToClose) => {
          if (instanceToClose !== instance && instanceToClose.current.open) {
            instanceToClose.current.onClose()
          }
        })
      }
    }, [currentInstance.open])
  }
  return useOnlyOneMenuOpened
}

export default buildUseOnlyOpenedInstanceHook
