import { ReactNode } from "react";
import { PersonalInfoForm } from "./components/personal-info-form";
import { Steps } from "./components/steps";
import { useDataStore } from "./store/use-data-store";
import { SelectYourPlanForm } from "./components/select-your-plan-form";
import { AddOnsForm } from "./components/add-ons-form";
import { FinishingUp } from "./components/finishing-up";
import { ThankYouComponent } from "./components/thank-you-component";
import { useShallow } from "zustand/react/shallow";

const stepsComponent: {[key: string]: ReactNode} = {
  1: <PersonalInfoForm />,
  2: <SelectYourPlanForm />,
  3: <AddOnsForm />,
  4: <FinishingUp />,
}

export function App() {
  const { currentStep, isFormComplete } = useDataStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      isFormComplete: state.isFormComplete,
    })),
  )

  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      {/* CONTENT */}
      <div className="rounded-xl w-full max-w-[60rem] min-h-[37.5rem] flex bg-white p-4 shadow-lg">
        {/* STEPS */}
        <Steps />
        {isFormComplete ? (
          <ThankYouComponent />
        ) : (
          <>
            {stepsComponent[currentStep]}
          </>
        )}
      </div>
    </div>
  )
}
