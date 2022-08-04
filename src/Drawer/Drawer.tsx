import * as React from 'react'

import { useMergedRef } from '../_internal/useMergedRef'

import { DrawerProps, DrawerStep } from './Drawer.interface'
import {
  DrawerActionTypes,
  DrawerReducerState,
  reducer,
} from './Drawer.reducer'
import { DrawerBar, DrawerContainer, RemoveRefresh } from './Drawer.style'

const INITIAL_STATE: DrawerReducerState = {
  drawerStep: DrawerStep.closed,
  dragStarted: false,
  position: null,
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (props, ref) => {
    const { children, state: stateProp, onStateChange } = props
    const mergedRef = useMergedRef(ref)
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
    React.useEffect(() => {
      onStateChange?.(state.drawerStep)
    }, [state.drawerStep]) // eslint-disable-line react-hooks/exhaustive-deps
    React.useEffect(() => {
      if (stateProp) {
        dispatch({
          type: DrawerActionTypes.ChangeStep,
          value: stateProp,
          containerHeight: mergedRef.current?.clientHeight ?? 0,
        })
      }
    }, [stateProp]) // eslint-disable-line react-hooks/exhaustive-deps

    React.useEffect(() => {
      if (state.dragStarted) {
        const handleDrag = (e: MouseEvent | TouchEvent) =>
          React.startTransition(() =>
            dispatch({
              type: DrawerActionTypes.Drag,
              value: Math.round(
                Number(
                  (e as MouseEvent).clientY ??
                    (e as TouchEvent).touches[0].clientY
                )
              ),
            })
          )
        const handleDragEnd = () =>
          setTimeout(
            () =>
              React.startTransition(() =>
                dispatch({
                  type: DrawerActionTypes.EndDrag,
                  containerHeight: mergedRef.current?.clientHeight ?? 0,
                })
              ),
            0
          )
        window.addEventListener('mousemove', handleDrag)
        window.addEventListener('touchmove', handleDrag, { passive: false })
        window.addEventListener('mouseup', handleDragEnd)
        window.addEventListener('touchend', handleDragEnd, { passive: false })

        return () => {
          window.removeEventListener('mousemove', handleDrag)
          window.removeEventListener('touchmove', handleDrag)
          window.removeEventListener('mouseup', handleDragEnd)
          window.removeEventListener('touchend', handleDragEnd)
        }
      }
    }, [state.dragStarted]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <DrawerContainer
        ref={mergedRef}
        flat
        backgroundColor={(theme) => theme.defaultBackground}
        style={{
          top: Number.isInteger(state.position) ? state.position! : undefined,
          borderRadius: state.position === 0 ? 0 : undefined,
        }}
        spacing="regular"
      >
        <RemoveRefresh />
        <DrawerBar
          onTouchStart={() => dispatch({ type: DrawerActionTypes.StartDrag })}
          onMouseDown={() => dispatch({ type: DrawerActionTypes.StartDrag })}
        />
        {children}
      </DrawerContainer>
    )
  }
)
