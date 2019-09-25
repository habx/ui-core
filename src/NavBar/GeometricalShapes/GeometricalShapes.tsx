import * as React from 'react'

import {
  GeometricalShapesContainer,
  SmallBottomShape,
  LargeBottomShape,
} from './GeometricalShapes.style'

const GeometricalShapes: React.FunctionComponent<GeometricalShapesProps> = ({
  isExpanded,
}) => {
  return (
    <GeometricalShapesContainer data-expanded={isExpanded}>
      <SmallBottomShape />
      <LargeBottomShape />
    </GeometricalShapesContainer>
  )
}

interface GeometricalShapesProps {
  isExpanded: boolean
}

export default GeometricalShapes
