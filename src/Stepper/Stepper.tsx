import * as React from 'react'

import { Icon } from '../Icon'

import { StepperProps } from './Stepper.interface'
import {
  Step,
  StepperContainer,
  StepIconContainer,
  StepContent,
  StepSeparator,
  StepLabel,
} from './Stepper.style'

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (props, ref) => {
    const { steps: rawSteps, currentStepIndex, onStepClick, ...rest } = props

    const steps = React.useMemo(
      () =>
        rawSteps.map((step, i) => ({
          ...step,
          toDo: i > currentStepIndex,
        })),
      [currentStepIndex, rawSteps]
    )

    return (
      <StepperContainer ref={ref} {...rest}>
        {steps.map((step, stepIndex) => (
          <Step
            key={stepIndex}
            data-disabled={step.disabled === true}
            data-current={stepIndex === currentStepIndex}
            data-to-do={step.toDo}
            onClick={() => onStepClick(step, stepIndex)}
          >
            {stepIndex > 0 && <StepSeparator />}
            <StepContent>
              <StepIconContainer>
                <Icon icon="check" />
              </StepIconContainer>
              <StepLabel
                type="caption"
                opacity={1}
                data-first={stepIndex === 0}
                data-last={stepIndex === steps.length - 1}
              >
                {step.label}
              </StepLabel>
            </StepContent>
          </Step>
        ))}
      </StepperContainer>
    )
  }
)
