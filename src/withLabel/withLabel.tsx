import * as React from 'react'
import styled, { css, StyledComponent } from 'styled-components'

import { mapValues } from '../_internal/data'
import { useUniqID } from '../_internal/useUniqId'
import { Text, RawTextComponents, TextProps, TextTypes } from '../Text'
import { theme } from '../theme'

import { WithLabel, WithSemanticLabel } from './withLabel.interface'

interface LabelReceivedProps {
  label?: string
  labelType?: TextTypes
  error?: boolean
  disabled?: boolean
}

interface Options {
  padding?: 'small' | 'regular' | 'large'
  orientation?: 'vertical' | 'horizontal' | 'horizontal-reverse'
}

interface SemanticOptions extends Options {
  testid: string
}

const labelStyle = css`
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
`

const LabelContainer = styled(Text)`
  ${labelStyle}
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

const RawLabelComponents = mapValues(
  RawTextComponents,
  (RawText) =>
    styled(RawText).attrs(() => ({ as: 'label' }))`
      ${labelStyle}
    `
) as Record<TextTypes, StyledComponent<'label', any, TextProps>>

export const withLabel = <RefElement extends HTMLElement>({
  padding = 'small',
  orientation = 'vertical',
}: Options = {}) => <Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Field = React.forwardRef<RefElement, WithLabel<Props>>((props, ref) => {
    const { label, labelType, ...rest } = props as LabelReceivedProps

    if (label) {
      return (
        <FieldWithLabelContainer
          className="label-line"
          data-orientation={orientation}
          data-padding={padding}
        >
          <LabelContainer
            type={labelType}
            variation="title"
            warning={rest.error}
            data-disabled={rest.disabled}
          >
            {label}
          </LabelContainer>
          <WrappedComponent {...(rest as Props)} ref={ref} />
        </FieldWithLabelContainer>
      )
    }

    return <WrappedComponent {...(rest as Props)} ref={ref} />
  })

  return Field
}

export const withSemanticLabel = <RefElement extends HTMLElement>({
  orientation = 'vertical',
  padding = 'small',
  testid,
}: SemanticOptions) => <Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) =>
  React.forwardRef<RefElement, WithSemanticLabel<Props>>(
    ({ label, labelType = 'regular', id, ...props }, ref) => {
      const fieldId = useUniqID(id)
      const Label = RawLabelComponents[labelType]

      return (
        <FieldWithLabelContainer
          data-orientation={orientation}
          data-padding={padding}
        >
          <Label
            data-disabled={props.disabled}
            data-testid={testid}
            htmlFor={fieldId}
            variation="title"
            warning={props.error}
          >
            {label}
          </Label>
          <WrappedComponent {...(props as Props)} ref={ref} id={fieldId} />
        </FieldWithLabelContainer>
      )
    }
  )
