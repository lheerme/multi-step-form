import { StepButton } from "./components/step-button";

export function App() {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      {/* CONTENT */}
      <div className="rounded-xl w-full max-w-6xl min-h-[35.5rem] flex bg-white p-4 shadow-lg">
        {/* STEPS */}
        <div className="w-full max-w-[274px] bg-[url('./assets/bg-sidebar-desktop.svg')] rounded-lg py-9 px-7 flex flex-col items-center gap-8 shadow-md">

          <StepButton.Root>
            <StepButton.Step>
              1
            </StepButton.Step>
            <StepButton.Content>
              <StepButton.Desc>STEP 1</StepButton.Desc>
              <StepButton.Title>YOUR INFO</StepButton.Title>
            </StepButton.Content>
          </StepButton.Root>

          <StepButton.Root>
            <StepButton.Step>
              2
            </StepButton.Step>
            <StepButton.Content>
              <StepButton.Desc>STEP 2</StepButton.Desc>
              <StepButton.Title>SELECT PLAN</StepButton.Title>
            </StepButton.Content>
          </StepButton.Root>
          <StepButton.Root>
            <StepButton.Step>
              3
            </StepButton.Step>
            <StepButton.Content>
              <StepButton.Desc>STEP 3</StepButton.Desc>
              <StepButton.Title>ADD-ONS</StepButton.Title>
            </StepButton.Content>
          </StepButton.Root>

          <StepButton.Root>
            <StepButton.Step>
              4
            </StepButton.Step>
            <StepButton.Content>
              <StepButton.Desc>STEP 4</StepButton.Desc>
              <StepButton.Title>SUMARRY</StepButton.Title>
            </StepButton.Content>
          </StepButton.Root>
        </div>
      </div>
    </div>
  )
}
