import * as React from 'react'

export function useUniqID(defaultId: string | undefined): string
/** @deprecated Replace with `React.useId` */
export function useUniqID(): string
export function useUniqID(defaultId?: string): string {
  const idRef = React.useRef<string | null>(null)
  const id = React.useId()

  if (idRef.current === null) {
    if (defaultId) {
      idRef.current = defaultId
    } else {
      idRef.current = id
    }
  }

  return idRef.current
}
