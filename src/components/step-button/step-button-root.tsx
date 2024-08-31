import { ComponentProps } from "react";
import { useDataStore } from "../../store/use-data-store";
import { twMerge } from "tailwind-merge";
import { useShallow } from "zustand/react/shallow";

interface StepButtonRootProps extends ComponentProps<'button'> {
  step: number
}

export function StepButtonRoot(props: StepButtonRootProps) {
  const { step, className, ...rest } = props

  const { currentStep, setCurrentStep, isFormComplete } = useDataStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      isFormComplete: state.isFormComplete
    })),
  )

  function handleClick() {
    if (step > currentStep || isFormComplete) return

    setCurrentStep(step)
  }

  return (
    <button 
      {...rest} 
      onClick={handleClick} 
      className={twMerge('flex items-center gap-4 w-full group', 
        step > currentStep && 'cursor-not-allowed',
        isFormComplete && 'cursor-not-allowed',
        className && className
      )} 
    />
  )
}