import * as React from 'react'

import { clamp, isFunction, isNil } from '../_internal/data'
import { stringifyColor } from '../color'
import { Text } from '../Text'
import { useThemeVariant } from '../useThemeVariant'
import { withLabel } from '../withLabel'

import {
  SliderInnerProps,
  Tooltip,
  Value,
  Element,
  Indicator,
} from './Slider.interface'
import {
  SliderContainer,
  SliderContent,
  SliderMainBar,
  SliderTooltips,
  SliderBackgroundDot,
  SliderIndicator,
} from './Slider.style'
import { SliderBar } from './SliderBar'
import { SliderDot } from './SliderDot'

const InnerSlider = React.forwardRef<HTMLDivElement, SliderInnerProps>(
  (props, ref) => {
    const {
      disabled = false,
      shouldTooltipFollowDot = true,
      range = false,
      onChange = () => {},
      tooltipFormatter,
      customValues,
      indicators: rawIndicators = [],
      min = 0,
      max: rawMax = 100,
      step: rawStep = 5,
      dots: rawDots,
      value: rawValue,
      reversed = false,
      dotType = 'tag',
      ...rest
    } = props

    const max = customValues ? customValues.length - 1 : rawMax

    const step = customValues ? 1 : rawStep
    const dots = customValues ? true : rawDots
    const emptyRange: [Element, Element] = React.useMemo(() => [min, max], [])
    const value = !Array.isArray(rawValue) && range ? emptyRange : rawValue

    const barRef = React.useRef<HTMLDivElement>(null)
    const [localValue, setLocalValue] = React.useState<Value>(value)
    const localValueRef = React.useRef<Value>(value)
    const theme = useThemeVariant()

    const hasValue = range
      ? !isNil((localValue as [Element, Element])[0]) &&
        !isNil((localValue as [Element, Element])[1])
      : !isNil(localValue)

    const getPositionFromValue = React.useCallback(
      (currentValue?: number) => {
        if (isNil(currentValue)) {
          return 0
        }

        return (100 * (clamp(currentValue, min, max) - min)) / (max - min)
      },
      [max, min]
    )

    const tooltips = React.useMemo<Tooltip[]>(() => {
      const buildTooltip = (tooltipValue: number): Tooltip => {
        const label = customValues ? customValues[tooltipValue] : tooltipValue
        const raw = `${isNil(label) ? '' : label}`

        const content = isFunction(tooltipFormatter)
          ? tooltipFormatter(tooltipValue, raw)
          : raw

        return {
          content,
          position: getPositionFromValue(tooltipValue),
        }
      }

      if (range && Array.isArray(localValue)) {
        const rangeLocalValue =
          isNil(localValue[0]) || isNil(localValue[1])
            ? [min, max]
            : (localValue as [number, number])

        return [
          buildTooltip(rangeLocalValue[0]),
          buildTooltip(rangeLocalValue[1]),
        ]
      }

      return [
        buildTooltip(
          !localValue || isNil(localValue) ? min : (localValue as number)
        ),
      ]
    }, [
      customValues,
      getPositionFromValue,
      localValue,
      range,
      tooltipFormatter,
      min,
      max,
    ])

    const indicators = React.useMemo<Indicator[]>(
      () =>
        rawIndicators.map((indicator) => {
          const indicatorMinInRange = Math.min(...indicator.range)
          const indicatorMaxInRange = Math.max(...indicator.range)
          const indicatorMin =
            indicatorMinInRange > min ? indicatorMinInRange : min
          const indicatorMax =
            indicatorMaxInRange < max ? indicatorMaxInRange : max

          return {
            color: stringifyColor(theme.colors.error.base),
            ...indicator,
            range: [
              getPositionFromValue(indicatorMin),
              getPositionFromValue(indicatorMax),
            ],
          }
        }),
      [getPositionFromValue, max, min, rawIndicators, theme.colors.error.base]
    )

    React.useEffect(() => {
      localValueRef.current = localValue
    }, [localValue])

    React.useEffect(() => {
      setLocalValue(value)
    }, [value])

    const getValueFromPosition = (currentPosition: number) => {
      const boundedPosition = Math.min(Math.max(currentPosition, 0), 100)

      const exactValue = (boundedPosition * (max - min)) / 100 + min

      return Math.round(exactValue / step) * step
    }

    const buildDot = (rangeIndex: 0 | 1 = 0) => {
      const getDotValue = (): number => {
        if (range) {
          if (rangeIndex === 1) {
            return isNil((localValue as [number, number])[1])
              ? max
              : (localValue as [number, number])[1]
          }

          return isNil((localValue as [number, number])[0])
            ? min
            : (localValue as [number, number])[0]
        }

        return isNil(localValue) ? min : (localValue as number)
      }

      const dotValue = getDotValue()

      const matchingIndicator = indicators.find(
        ({ range: indicatorRange }) =>
          Math.min(...indicatorRange) <= dotValue &&
          Math.max(...indicatorRange) >= dotValue
      )

      const position = getPositionFromValue(dotValue)

      const handlePositionChange = (delta: number) => {
        const newPosition =
          position +
          (delta /
            (barRef.current
              ? (barRef.current as HTMLDivElement).offsetWidth
              : 0)) *
            100

        const newValue = getValueFromPosition(newPosition)

        setLocalValue((prev) => {
          if (!range) {
            return newValue
          }

          const prevValue = isNil(prev)
            ? [null, null]
            : (prev as [Element, Element])

          if (rangeIndex === 0) {
            return [newValue, isNil(prevValue[1]) ? max : prevValue[1]]
          }

          return [isNil(prevValue[0]) ? min : prevValue[0], newValue]
        })
      }

      return (
        <SliderDot
          key={rangeIndex}
          position={position}
          onMove={handlePositionChange}
          onRest={() => handleChange(localValueRef.current)}
          innerColor={matchingIndicator ? matchingIndicator.color : undefined}
          large={rangeIndex > 0}
          dotType={dotType}
          tooltip={tooltips[rangeIndex]}
        />
      )
    }

    const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const setValue = (val: [number, number] | number) => {
        setLocalValue(val)
        handleChange(val)
      }

      if (barRef.current) {
        const eventPosition =
          e.pageX - barRef.current.getBoundingClientRect().left
        const newPosition = (eventPosition / barRef.current.offsetWidth) * 100

        const positionValue = getValueFromPosition(newPosition)

        if (range) {
          if (!hasValue) {
            setValue([min, positionValue])
          } else {
            const typedValue = localValue as [number, number]
            const isUpdatingFirstElement =
              Math.abs(positionValue - (typedValue[0] || 0)) <
              Math.abs(positionValue - (typedValue[1] || 0))

            setValue(
              isUpdatingFirstElement
                ? [positionValue, typedValue[1]]
                : [typedValue[0], positionValue]
            )
          }
        } else {
          setValue(positionValue)
        }
      }
    }

    const handleChange = (val: Value) => {
      const sanitizedValue: Value =
        Array.isArray(val) &&
        val[0] !== null &&
        val[1] !== null &&
        val[0] > val[1]
          ? [val[1], val[0]]
          : val

      onChange(sanitizedValue)
    }

    const valueDots = range ? [buildDot(0), buildDot(1)] : buildDot()

    const valueBar = React.useMemo(() => {
      const getComponent = ({ from, to }: { from: number; to: number }) => (
        <SliderBar
          from={getPositionFromValue(from)}
          to={getPositionFromValue(to)}
          indicators={indicators}
        />
      )

      if (range) {
        if (
          !hasValue ||
          (Array.isArray(customValues) && customValues.length === 0)
        ) {
          return null
        }

        const rangeValue = localValue as [number, number]

        return getComponent({
          from: Math.min(...rangeValue),
          to: Math.max(...rangeValue),
        })
      }

      return reversed
        ? getComponent({
            from: (hasValue ? localValue : min) as number,
            to: max,
          })
        : getComponent({
            from: min,
            to: (hasValue ? localValue : min) as number,
          })
    }, [
      customValues,
      getPositionFromValue,
      hasValue,
      indicators,
      localValue,
      min,
      range,
    ])

    const valueIndicator = React.useMemo(
      () =>
        indicators.map((indicator) => {
          const getPosition = ([from, to]: [number, number], opacity = 1) => ({
            left: `${from}%`,
            right: `${100 - to}%`,
            opacity,
          })

          return (
            <React.Fragment key={indicator.range.join('.')}>
              <SliderIndicator
                color="#fff"
                style={getPosition(indicator.range)}
              />
              <SliderIndicator
                color={indicator.color}
                style={getPosition(indicator.range, 0.5)}
              />
            </React.Fragment>
          )
        }),
      [indicators]
    )

    const possibleValues = Array.from(
      { length: (max - min) / step + 1 },
      (_, i) => (min + i) * step
    )

    return (
      <SliderContainer data-dot-type={dotType}>
        <SliderContent
          {...rest}
          data-disabled={disabled}
          data-has-value={hasValue}
          onClick={handleBarClick}
          ref={ref}
        >
          <SliderMainBar ref={barRef} />
          {valueDots}
          {valueBar}
          {valueIndicator}
          {dots &&
            possibleValues.map((possibleValue, index) => (
              <SliderBackgroundDot
                key={index}
                style={{ left: `${getPositionFromValue(possibleValue)}%` }}
              />
            ))}
        </SliderContent>
        {dotType === 'regular' && (
          <SliderTooltips data-fixed={!shouldTooltipFollowDot}>
            {tooltips.map((tooltip, index) => (
              <Text
                key={index}
                data-testid="slider-tooltip"
                style={
                  shouldTooltipFollowDot
                    ? {
                        paddingLeft: `${tooltip.position}%`,
                        top: 0,
                        position: 'absolute',
                      }
                    : undefined
                }
                variation="title"
              >
                {tooltip.content}
              </Text>
            ))}
          </SliderTooltips>
        )}
      </SliderContainer>
    )
  }
)

export const Slider = withLabel<HTMLDivElement>({
  orientation: 'vertical',
})<SliderInnerProps>(InnerSlider)
