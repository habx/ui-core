import styled from 'styled-components'

export const IconContainer = styled.span<{ url: string }>`
  background-color: currentColor;
  display: block;
  height: 100%;
  width: 100%;
  background-position: center;
  mask-size: contain;
  mask-position: top left;
  mask-repeat: no-repeat;
  
  mask-image: url('${({ url }) => url}');
`
