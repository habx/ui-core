import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoaderImg = styled.img`
  --loader-size: 48px;
  &[data-size='large'] {
    --loader-size: 72px;
  }
  &[data-size='small'] {
    --loader-size: 32px;
  }
  height: var(--loader-size);
  width: var(--loader-size);
`
