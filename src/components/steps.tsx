import { useDataStore } from "../store/use-data-store";
import { StepButton } from "./step-button";

export function Steps() {
  const currentStep = useDataStore((state) => state.currentStep)
  const setCurrentStep = useDataStore((state) => state.setCurrentStep)

  return (
    <div className="w-full max-w-[274px] bg-[url('./assets/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat rounded-lg py-9 px-7 flex flex-col items-center gap-8 shadow-md">
      <StepButton.Root setCurrentStep={() => setCurrentStep(1)}>
        <StepButton.Step isCurrentStep={currentStep === 1}>
          1
        </StepButton.Step>
        <StepButton.Content>
          <StepButton.Desc>STEP 1</StepButton.Desc>
          <StepButton.Title>YOUR INFO</StepButton.Title>
        </StepButton.Content>
      </StepButton.Root>

      <StepButton.Root setCurrentStep={() => setCurrentStep(2)}>
        <StepButton.Step isCurrentStep={currentStep === 2}>
          2
        </StepButton.Step>
        <StepButton.Content>
          <StepButton.Desc>STEP 2</StepButton.Desc>
          <StepButton.Title>SELECT PLAN</StepButton.Title>
        </StepButton.Content>
      </StepButton.Root>

      <StepButton.Root setCurrentStep={() => setCurrentStep(3)}>
        <StepButton.Step isCurrentStep={currentStep === 3}>
          3
        </StepButton.Step>
        <StepButton.Content>
          <StepButton.Desc>STEP 3</StepButton.Desc>
          <StepButton.Title>ADD-ONS</StepButton.Title>
        </StepButton.Content>
      </StepButton.Root>

      <StepButton.Root setCurrentStep={() => setCurrentStep(4)}>
        <StepButton.Step isCurrentStep={currentStep === 4}>
          4
        </StepButton.Step>
        <StepButton.Content>
          <StepButton.Desc>STEP 4</StepButton.Desc>
          <StepButton.Title>SUMARRY</StepButton.Title>
        </StepButton.Content>
      </StepButton.Root>
    </div>
  )
}