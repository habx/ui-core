import * as React from 'react'

export type StepperStep = { label: string; disabled?: boolean }

export default interface StepperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  currentStepIndex: number
  steps: StepperStep[]
  onStepClick: (step: StepperStep, stepIndex: number) => void
}
