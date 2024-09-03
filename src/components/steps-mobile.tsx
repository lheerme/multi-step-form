import { useDataStore } from "../store/use-data-store";
import { StepButton } from "./step-button";

export function StepsMobile() {
  const currentStep = useDataStore((state) => state.currentStep)

  return (
    <div className="w-full h-52 bg-[url('./assets/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat py-8 px-6 flex items-baseline justify-center gap-6 shadow-md absolute left-0 top-0">
      <StepButton.Root step={1} className="w-fit">
        <StepButton.Step isCurrentStep={currentStep === 1}>
          1
        </StepButton.Step>
      </StepButton.Root>

      <StepButton.Root step={2} className="w-fit">
        <StepButton.Step isCurrentStep={currentStep === 2}>
          2
        </StepButton.Step>
      </StepButton.Root>

      <StepButton.Root step={3} className="w-fit">
        <StepButton.Step isCurrentStep={currentStep === 3}>
          3
        </StepButton.Step>
      </StepButton.Root>

      <StepButton.Root step={4} className="w-fit">
        <StepButton.Step isCurrentStep={currentStep === 4}>
          4
        </StepButton.Step>
      </StepButton.Root>
    </div>
  )
}