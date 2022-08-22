import styled, { css } from 'styled-components'

import { zIndex } from '../_internal/theme/zIndex'
import { HeaderBar } from '../HeaderBar'
import { Layout } from '../Layout'
import { RoundIconButton } from '../RoundIconButton'
import { TabsBarItem } from '../TabsBarItem'
import { Text } from '../Text'
import { theme } from '../theme'

export const CloseButton = styled(RoundIconButton).attrs({ icon: 'close' })`
  position: absolute;
  top: 36px;
  right: 36px;
`

export const Container = styled(Layout)`
  --layout-left-padding: 0;
  --layout-right-padding: 0;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: grid;
  gap: 24px;
  align-content: start;
  width: 480px;
  padding: 36px;
  box-shadow: ${theme.shadow('regular')};
  overflow: auto;
  overflow: overlay;
  z-index: ${zIndex.modals};
`

export const Empty = styled(Text).attrs({ variation: 'lowContrast' })`
  text-align: center;
`

export const Header = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

export const Section = styled.div<{ scrollable?: true }>`
  display: grid;
  gap: 12px;

  ${(props) =>
    props.scrollable &&
    css`
      margin: -24px -36px;
      padding: 24px 36px;
      overflow: auto;
      overflow: overlay;
    `}
`

export const TabItem = styled(TabsBarItem)`
  font-size: 14px;
`

export const Tabs = styled(HeaderBar).attrs({ small: true })``
