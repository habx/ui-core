import styled, { css } from 'styled-components'

export const NavBarItemTooltip = styled.span<{ activebackgroundcolor: string }>`
  max-width: 44px;
  overflow: hidden;
  position: absolute;
  top: 8px;
  left: 0;
  z-index: 9999;
  opacity: 0;
  height: calc(100% - 16px);
  line-height: calc(100% - 16px);
  cursor: pointer;
  border-radius: 22px;
  font-size: 14px;
  white-space: nowrap;
  background-color: ${({ activebackgroundcolor }) => activebackgroundcolor};
  transition: max-width 250ms ease-in-out;

  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    background-color: initial;
  }
`

export const NavBarItemTooltipContent = styled.div`
  padding: 0 16px 0 8px;
`

export const IconContainer = styled.div`
  height: 44px;
  width: 44px;
  min-width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const NavBarItemContainer = styled.li<{
  activebackgroundcolor: string
  active?: boolean
}>`
  position: relative;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 0;
  color: #f9f9fb;
  outline: none;

  &[data-bottom='true'] {
    margin-top: auto;
  }
  &[data-bottom='true'] + [data-bottom='true'] {
    margin-top: initial;
  }

  &:focus ${IconContainer} {
    background-color: ${({ activebackgroundcolor }) => activebackgroundcolor};
    opacity: 0.6;
  }

  &.active ${IconContainer}, &[data-active='true'] ${IconContainer} {
    background-color: ${({ activebackgroundcolor }) => activebackgroundcolor};
    opacity: 1;
  }

  ${({ active }) =>
    active &&
    css<{ activebackgroundcolor: string }>`
      ${IconContainer} {
        background-color: ${({ activebackgroundcolor }) =>
          activebackgroundcolor};
        opacity: 1;

        @media (max-width: 600px) {
          background-color: initial;
        }
      }
    `}

  &:hover {
    ${NavBarItemTooltip} {
      max-width: 250px;
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    font-weight: normal;

    ${NavBarItemTooltip} {
      max-width: 300px;
      opacity: 1;
    }
  }
`
