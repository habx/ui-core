import styled from 'styled-components'

import { transition } from '../animations'
import { Text } from '../Text'
import { theme } from '../theme'

export const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-bottom: 28px;
`

export const StepContent = styled.div`
  display: flex;
  position: relative;
`

export const StepSeparator = styled.div`
  flex: 1 1 auto;
  height: 2px;
  transition: ${transition('all')};
  background-color: var(--stepper-step-circle-color);
`

export const StepIconContainer = styled.div`
  color: var(--stepper-step-circle-color);
  border: solid var(--stepper-step-border-width)
    var(--stepper-step-circle-color);
  height: 18px;
  width: 18px;
  font-size: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transition('all')};

  & > * {
    opacity: 0;
  }
`

export const Step = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;

  --stepper-step-circle-color: ${theme.color('primary')};
  --stepper-step-separator-color: ${theme.color('primary')};
  --stepper-step-text-color: ${theme.textColor()};
  --stepper-step-border-width: 2px;

  &[data-disabled='true'] {
    pointer-events: none;
    --stepper-step-circle-color: ${theme.neutralColor(300)};
    --stepper-step-text-color: ${theme.neutralColor(300)};
  }

  &:not([data-disabled='true']) {
    &:not([data-to-do='true']):not([data-current='true']) {
      & ${StepIconContainer} {
        background-color: var(--stepper-step-circle-color);
        color: #fff;

        & > * {
          opacity: 1;
        }
      }
    }

    &[data-current='true'] {
      --stepper-step-text-color: ${theme.color('primary')};
    }

    &[data-to-do='true'] {
      --stepper-step-text-color: ${theme.neutralColor(500)};
      --stepper-step-circle-color: ${theme.neutralColor(500)};

      &:hover {
        --stepper-step-border-width: 4px;
      }
    }
  }

  &:first-child {
    flex: 0 0 auto;
  }
`

export const StepLabel = styled(Text)`
  position: absolute;
  bottom: -28px;
  left: -50px;
  right: -50px;
  text-align: center;
  white-space: nowrap;
  color: var(--stepper-step-text-color);

  &[data-first='true'] {
    left: 0;
    right: unset;
    text-align: left;
  }

  &[data-last='true'] {
    right: 0;
    left: unset;
    text-align: right;
  }
`
