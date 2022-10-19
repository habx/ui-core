import { debounce } from 'lodash'
import * as React from 'react'

import { useMergedRef } from '../_internal/useMergedRef'

import { DrawerProps, DrawerStep } from './Drawer.interface'
import {
  DrawerActionTypes,
  DrawerReducerState,
  reducer,
} from './Drawer.reducer'
import {
  DrawerBar,
  DrawerContainer,
  DrawerContent,
  RemoveRefresh,
} from './Drawer.style'

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
    const initialized = React.useRef(INITIAL_STATE.drawerStep === stateProp)

    React.useEffect(() => {
      if (stateProp !== state.drawerStep && initialized.current) {
        onStateChange?.(state.drawerStep)
      }
    }, [state.drawerStep]) // eslint-disable-line react-hooks/exhaustive-deps
    React.useEffect(() => {
      if (stateProp && stateProp !== state.drawerStep) {
        const initializedStep = debounce(
          () => {
            dispatch({
              type: DrawerActionTypes.ChangeStep,
              value: stateProp,
              containerHeight: mergedRef.current?.clientHeight ?? 0,
            })
          },
          200,
          { leading: true, trailing: false }
        )
        initializedStep()
        initialized.current = true
        window.addEventListener('resize', initializedStep)
        return () => {
          window.removeEventListener('resize', initializedStep)
        }
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
        style={
          {
            '--drawer-position': Number.isInteger(state.position)
              ? `${state.position}px`
              : undefined,
            borderRadius: state.position === 0 ? 0 : undefined,
          } as React.CSSProperties
        }
        data-step={state.drawerStep}
        spacing="regular"
      >
        <RemoveRefresh />
        <DrawerBar
          onTouchStart={() => dispatch({ type: DrawerActionTypes.StartDrag })}
          onMouseDown={() => dispatch({ type: DrawerActionTypes.StartDrag })}
        />
        <DrawerContent>{children}</DrawerContent>
      </DrawerContainer>
    )
  }
)
