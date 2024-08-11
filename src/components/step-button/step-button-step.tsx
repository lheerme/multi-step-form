import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface StepButtonStepProps extends ComponentProps<'div'> {
  isCurrentStep?: boolean
}

export function StepButtonStep(props: StepButtonStepProps) {
  const { isCurrentStep, ...rest } = props

  return (
    <div
      {...rest}
      className={twMerge('ring-1 ring-white rounded-full size-9 flex items-center justify-center text-white font-bold transition-colors',
        isCurrentStep ? 'ring-light-blue bg-light-blue text-marine-blue' 
        : 'group-hover:ring-light-blue group-hover:bg-light-blue group-hover:text-marine-blue'
      )}
    />
  )
}