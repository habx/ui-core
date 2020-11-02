import * as React from 'react'

export const useMergedContext = <
  ContextProps extends object,
  ComponentProps extends object
>(
  Context: React.Context<ContextProps>,
  props: ComponentProps
): ContextProps & ComponentProps => {
  const contextProps: ContextProps = React.useContext(Context)

  return { ...contextProps, ...props }
}
