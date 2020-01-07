import * as React from 'react'

import { Indicator } from '../Slider.interface'

import SliderBarProps from './SliderBar.interface'
import { SliderBarContainer } from './SliderBar.style'

const SliderBar: React.FunctionComponent<SliderBarProps> = ({
  from,
  to,
  indicators,
}) => {
  const indicatorRanges = React.useMemo<
    { raw: Indicator; ranges: [number, number][] }[]
  >(
    () =>
      indicators.map(indicator => {
        const insideRanges: [number, number][] = []

        if (indicator.range[0] < to && indicator.range[1] > from) {
          insideRanges.push([
            Math.max(indicator.range[0], from),
            Math.min(indicator.range[1], to),
          ])
        }

        return {
          raw: indicator,
          ranges: insideRanges,
        }
      }),
    [from, indicators, to]
  )

  return (
    <React.Fragment>
      <SliderBarContainer
        data-main
        data-testid="slider-bar"
        style={{ left: `${from}%`, right: `${100 - to}%` }}
      />
      {indicatorRanges.map((indicator, index) => (
        <React.Fragment key={index}>
          {indicator.ranges.map((indicatorRange, rangeIndex) => (
            <SliderBarContainer
              key={rangeIndex}
              style={{
                left: `${indicatorRange[0]}%`,
                right: `${100 - indicatorRange[1]}%`,
                backgroundColor: indicator.raw.color,
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default SliderBar
