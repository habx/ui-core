// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
import React from 'react'

const SCROLL_KEYS = { 37: 1, 38: 1, 39: 1, 40: 1 }

const preventDefault = (e: Event) => e.preventDefault()

function preventDefaultForScrollKeys(e: KeyboardEvent) {
  if (SCROLL_KEYS[e.keyCode as keyof typeof SCROLL_KEYS]) {
    preventDefault(e)
    return false
  }
}

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
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false
const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

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

export const useDisableScroll = (condition: boolean) => {
  React.useEffect(() => {
    if (condition) {
      disableScroll()
    } else {
      enableScroll()
    }
    return enableScroll
  }, [condition])
}
