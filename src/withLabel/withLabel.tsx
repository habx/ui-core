import * as React from 'react'
import styled from 'styled-components'

import { useUniqID } from '../_internal/useUniqId'
import { textStyles } from '../Text'
import { theme } from '../theme'

import {
  WithLabel,
  WithLabelOptions,
  LabelReceivedProps,
} from './withLabel.interface'

const LabelContainer = styled.label<{ warning?: boolean }>`
  user-select: none;

  margin: auto 0;

  &[data-disabled='true'] {
    color: ${theme.neutralColor(400)};
  }

  [data-orientation='vertical'] > & {
    padding-bottom: 8px;
  }

  [data-orientation='horizontal'] > & {
    padding-right: 8px;
  }

  [data-orientation='horizontal-reverse'] > & {
    padding-left: 8px;
  }

  &[data-type='regular'] {
    ${textStyles.regular};
  }

  &[data-type='small'] {
    ${textStyles.small};
  }

  &[data-type='caption'] {
    ${textStyles.caption};
  }
`

const FieldWithLabelContainer = styled.div`
  display: flex;

  &[data-orientation='vertical'] {
    flex-direction: column;
  }

  &[data-orientation='horizontal'] {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &[data-orientation='horizontal-reverse'] {
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
  }
`

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
            warning={rest.error}
            htmlFor={id}
          >
            {label}
          </LabelContainer>
          <WrappedComponent {...(rest as Props)} ref={ref} id={id} />
        </FieldWithLabelContainer>
      )
    }

    return <WrappedComponent {...(rest as Props)} ref={ref} />
  })

  return Field
}
