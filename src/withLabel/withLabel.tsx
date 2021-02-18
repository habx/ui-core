import * as React from 'react'

import { useUniqID } from '../_internal/useUniqId'

import {
  WithLabel,
  WithLabelOptions,
  LabelReceivedProps,
} from './withLabel.interface'
import {
  LabelContainer,
  FieldWithLabelContainer,
  LabelElementRightContainer,
} from './withLabel.style'

export const withLabel = <RefElement extends HTMLElement>({
  padding = 'small',
  orientation = 'vertical',
  type: defaultLabelType = 'small',
  componentName,
}: WithLabelOptions = {}) => <Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Field = React.forwardRef<RefElement, WithLabel<Props>>((props, ref) => {
    const {
      label,
      labelType = defaultLabelType,
      labelElementRight,
      id: rawId,
      ...rest
    } = props as LabelReceivedProps

    const id = useUniqID(rawId)

    if (label) {
      return (
        <FieldWithLabelContainer
          className="label-line"
          data-orientation={orientation}
          data-padding={padding}
        >
          <LabelContainer
            data-type={labelType}
            data-disabled={rest.disabled}
            data-testid={`${componentName ?? 'input'}-label`}
            data-error={rest.error}
            htmlFor={id}
          >
            {label}
            <LabelElementRightContainer>
              {labelElementRight}
            </LabelElementRightContainer>
          </LabelContainer>
          <WrappedComponent {...(rest as Props)} ref={ref} id={id} />
        </FieldWithLabelContainer>
      )
    }

    return <WrappedComponent {...(rest as Props)} ref={ref} />
  })

  return Field
}
