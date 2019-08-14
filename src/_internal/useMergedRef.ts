import * as React from 'react'

const useMergedRef = <RefElement>(
  ref: React.Ref<RefElement> | null | undefined
): React.RefObject<RefElement> => {
  const innerRef = React.useRef<RefElement>(null)

  return (ref ? ref : innerRef) as React.RefObject<RefElement>
}

export default useMergedRef
