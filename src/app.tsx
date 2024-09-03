import { ReactNode } from "react";
import { PersonalInfoForm } from "./components/personal-info-form";
import { Steps } from "./components/steps";
import { useDataStore } from "./store/use-data-store";
import { SelectYourPlanForm } from "./components/select-your-plan-form";
import { AddOnsForm } from "./components/add-ons-form";
import { FinishingUp } from "./components/finishing-up";
import { ThankYouComponent } from "./components/thank-you-component";
import { useShallow } from "zustand/react/shallow";
import { useMediaQuery } from "./hooks/use-media-query";
import { StepsMobile } from "./components/steps-mobile";
import { twMerge } from "tailwind-merge";

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

  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div className="w-full min-h-dvh flex md:items-center justify-center px-3">
      {/* CONTENT */}
      {!isDesktop && (
        <StepsMobile />
      )}
      <div 
        className={twMerge('rounded-xl w-full max-w-[30rem] md:max-w-[60rem] h-fit md:min-h-[37.5rem] flex flex-col md:flex-row bg-white mt-24 md:mt-0 p-4 shadow-lg z-[1] mb-24 md:mb-0',
          isFormComplete && 'mb-0'
        )}
      >
        {/* STEPS */}
        {isDesktop && (
          <Steps />
        )}
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
