import * as React from 'react'
import styled from 'styled-components'

import Text from '../Text'

const LabelContainer = styled(Text)`
  user-select: none;
`

const FieldWithLabelContainer = styled.div`
  display: flex;

  &[data-orientation='vertical'] {
    flex-direction: column;

    & > ${LabelContainer} {
      padding-bottom: 8px;
    }
  }

  &[data-orientation='horizontal'] {
    flex-direction: row-reverse;
    justify-content: flex-end;

    & > ${LabelContainer} {
      padding-left: 8px;
    }
  }
`

type LabelReceivedProps = {
  label?: string
}

type Options = {
  padding?: 'small' | 'regular' | 'large'
  orientation?: 'vertical' | 'horizontal'
}

const withLabel = <RefElement extends HTMLElement>({
  padding = 'small',
  orientation = 'vertical',
}: Options = {}) => <Props extends object>(
  WrappedComponent: React.ComponentType<Props>
) => {
  const Field = React.forwardRef<RefElement, Props & LabelReceivedProps>(
    (props, ref) => {
      const { label, ...rest } = props as LabelReceivedProps

      if (label) {
        return (
          <FieldWithLabelContainer
            className="label-line"
            data-orientation={orientation}
            data-padding={padding}
          >
            <LabelContainer opacity={1}>{label}</LabelContainer>
            <WrappedComponent {...(rest as Props)} ref={ref} />
          </FieldWithLabelContainer>
        )
      }

      return <WrappedComponent {...(rest as Props)} ref={ref} />
    }
  )

  return Field
}

export default withLabel
