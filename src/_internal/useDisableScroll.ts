// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
import React from 'react'

import { isClientSide } from './ssr'

const SCROLL_KEYS = { 37: 1, 38: 1, 39: 1, 40: 1 }

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false
try {
  // @ts-ignore
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: () => (supportsPassive = true),
    })
  )
} catch {
  //
}

const wheelOpt = supportsPassive ? { passive: false } : false
const wheelEvent =
  isClientSide && 'onwheel' in document.createElement('div')
    ? 'wheel'
    : 'mousewheel'

export type UseDisableScrollParams = {
  enabled: boolean
  ignoreRef?: React.RefObject<HTMLElement>
}

export const useDisableScroll = (params: UseDisableScrollParams) => {
  React.useEffect(() => {
    const preventDefault = (e: Event) => {
      if (
        params.ignoreRef &&
        e.target &&
        !params.ignoreRef?.current?.contains(e.target as Node)
      ) {
        e.preventDefault()
      }
    }

    const preventDefaultForScrollKeys = (e: KeyboardEvent) => {
      if (SCROLL_KEYS[e.keyCode as keyof typeof SCROLL_KEYS]) {
        preventDefault(e)
        return false
      }
    }

    const disableScroll = () => {
      window.addEventListener('DOMMouseScroll', preventDefault, false)
      window.addEventListener('touchmove', preventDefault, wheelOpt)
      window.addEventListener('keydown', preventDefaultForScrollKeys, false)
      window.addEventListener(wheelEvent, preventDefault, wheelOpt)
    }

    const enableScroll = () => {
      window.removeEventListener('DOMMouseScroll', preventDefault, false)
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
      // @ts-ignore
      window.removeEventListener('touchmove', preventDefault, wheelOpt)
      // @ts-ignore
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
    }

    if (params.enabled) {
      disableScroll()
    } else {
      enableScroll()
    }
    return enableScroll
  }, [params.ignoreRef, params.enabled])
}
