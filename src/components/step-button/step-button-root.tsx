import { ComponentProps } from "react";

interface StepButtonRootProps extends ComponentProps<'button'> {
  setCurrentStep?: () => void
}

export function StepButtonRoot(props: StepButtonRootProps) {
  const { setCurrentStep, ...rest } = props

  return (
    <button onClick={setCurrentStep} {...rest} className="flex items-center gap-4 w-full group" />
  )
}