import * as React from 'react'

import SliderBarProps from './SliderBar.interface'
import { SliderBarContainer } from './SliderBar.style'

const SliderBar: React.FunctionComponent<SliderBarProps> = ({ from, to }) => (
  <SliderBarContainer
    data-testid="slider-bar"
    style={{ left: `${from}%`, right: `${100 - to}%` }}
  />
)
export default SliderBar
