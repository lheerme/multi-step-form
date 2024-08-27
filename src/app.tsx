import { ReactNode } from "react";
import { PersonalInfoForm } from "./components/personal-info-form";
import { Steps } from "./components/steps";
import { useDataStore } from "./store/use-data-store";
import { SelectYourPlanForm } from "./components/select-your-plan-form";
import { FormProvider, useForm } from "react-hook-form";
import { AddOnsForm } from "./components/add-ons-form";
import { FinishingUp } from "./components/finishing-up";

const stepsComponent: {[key: string]: ReactNode} = {
  1: <PersonalInfoForm />,
  2: <SelectYourPlanForm />,
  3: <AddOnsForm />,
  4: <FinishingUp />,
}

export function App() {
  const currentStep = useDataStore((state) => state.currentStep)
  const methods = useForm()

  // console.log(methods)
  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      {/* CONTENT */}
      <div className="rounded-xl w-full max-w-[60rem] min-h-[37.5rem] flex bg-white p-4 shadow-lg">
        {/* STEPS */}
        <Steps />
        <FormProvider {...methods}>
          {stepsComponent[currentStep]}
        </FormProvider>
      </div>
    </div>
  )
}
