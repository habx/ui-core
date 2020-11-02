import * as React from 'react'

export type StepperStep<Value = any> = {
  label: string
  disabled?: boolean
  value: Value
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  currentStepIndex: number
  steps: StepperStep[]
  onStepClick: (step: StepperStep, stepIndex: number) => void
}
