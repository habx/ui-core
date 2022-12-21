import styled, { css } from 'styled-components'

import { fontScale } from '../fontScale'
import { Text } from '../Text'
import { theme } from '../theme'

export const IconContainer = styled.div`
  margin: 2px 12px 0 -12px;
`

export const AlertBannerContainer = styled.div<{
  $bare?: boolean
  $error?: boolean
  $primary?: boolean
  $small?: boolean
  $success?: boolean
  $warning?: boolean
}>`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: flex-start;

  padding: 12px 24px;
  border-radius: 6px;

  font-family: ${theme.font()};
  font-size: ${(props) =>
    props.$small ? fontScale.pluto.size : fontScale.moon.size}px;

  background-color: var(
    --alert-panel-background,
    ${(props) =>
      props.$error
        ? theme.color('error', { variation: 'calmer' })
        : props.$success
        ? theme.color('success', { variation: 'calmer' })
        : props.$warning
        ? theme.color('warning', { variation: 'calmer' })
        : props.$primary
        ? theme.color('primary', { variation: 'calmer' })
        : !props.$bare && theme.neutralColor(100)}
  );
  color: var(
    --alert-panel-color,
    ${(props) =>
      props.$error
        ? theme.color('error')
        : props.$success
        ? theme.color('success')
        : props.$warning
        ? theme.color('warning', { variation: 'loud' })
        : props.$primary
        ? theme.color('primary')
        : props.$bare
        ? theme.neutralColor(400)
        : theme.neutralColor(700)}
  );

  ${(props) =>
    !(
      props.$bare ||
      props.$error ||
      props.$primary ||
      props.$small ||
      props.$success ||
      props.$warning
    ) &&
    css`
      ${IconContainer} {
        color: var(--alert-panel-color, ${theme.neutralColor(500)});
      }
    `}
`

export const IllustrationContainer = styled.div`
  flex: 0 0 auto;

  width: 48px;
  margin: 2px 12px 0 -12px;
`

export const AlertPanelTitle = styled(Text)`
  margin-top: -2px;
  font-weight: 500;
  color: inherit;
`
