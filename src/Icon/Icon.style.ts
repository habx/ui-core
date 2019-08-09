import styled from 'styled-components'

export const IconContainer = styled.span<{ url: string }>`
  background-color: currentColor;
  display: block;
  height: 1em;
  width: 1em;
  min-width: 1em;
  min-height: 1em;
  flex: 0 0 1em;
  background-position: center;
  
  &[data-colored='false'] {
    mask-size: contain;
    mask-position: top left;
    mask-repeat: no-repeat;
    mask-image: url('${({ url }) => url}');
  }
  
  &[data-colored='true'] {
    background-image: url('${({ url }) => url}');
  }
`
