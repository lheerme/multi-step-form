import { useShallow } from "zustand/react/shallow";
import { useDataStore } from "../store/use-data-store";
import { FormHeader } from "./form-header";
import { addOnsPrices } from "../lib/add-ons-prices";
import { separateByUppercase } from "../hooks/separate-by-uppercase";
import { Button } from "./button";
import { FormEvent } from "react";

export function FinishingUp() {
  const { plan, addOns, currentStep, setCurrentStep, setIsFormComplete } = useDataStore(
    useShallow((state) => ({
      plan: state.plan,
      addOns: state.addOns,
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      setIsFormComplete: state.setIsFormComplete
    })),
  )

  const filteredAddOns = Object.keys(addOns).filter((key) => addOns[key as keyof typeof addOns])
  const addOnsTotal = filteredAddOns.reduce((sum, key) => plan.isYearly ? sum + (addOnsPrices[key] * 10) : sum + addOnsPrices[key], 0)

  const total = plan.price + addOnsTotal

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsFormComplete(true)
  }

  function handleGoBackClick() {
    setCurrentStep(currentStep - 1)
  }

  function handleChangeClick() {
    setCurrentStep(2)
  }

  return (
    <form
      className="w-full max-w-lg py-2 px-3 md:py-4 md:px-6 flex-1 flex flex-col gap-3 md:gap-6 mx-auto"
      onSubmit={handleFormSubmit}
    >
      <FormHeader.Root>
        <FormHeader.Title>
          Finishing Up
        </FormHeader.Title>
        <FormHeader.Desc>
          Double-check everything looks OK before confirming.
        </FormHeader.Desc>
      </FormHeader.Root>

      <div className="w-full rounded-md bg-alabaster p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-light-gray pb-2 md:pb-5">
          <div className="flex flex-col">
            <p className="font-semibold text-marine-blue capitalize">
              {plan.type}
              {' '}
              ({plan.isYearly ? 'yearly' : 'monthly'})
            </p>

            <button
              onClick={handleChangeClick}
              className="text-cool-gray underline text-sm w-fit transition-colors hover:text-purplish-blue"
            >
              Change
            </button>
          </div>

          <span className="font-semibold text-marine-blue">${plan.price}/{plan.isYearly ? 'yr': 'mo'}</span>
        </div>

        {filteredAddOns.map((addOn) => (
          <div key={addOn} className="flex items-center justify-between text-sm">
            <p className="text-cool-gray capitalize">{separateByUppercase(addOn)}</p>
            <span className="text-marine-blue font-medium">
              +${plan.isYearly ? addOnsPrices[addOn] * 10 : addOnsPrices[addOn]}/{plan.isYearly ? 'yr': 'mo'}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-5">
        <p className="text-sm text-cool-gray">Total (per {plan.isYearly ? 'year' : 'month'})</p>
        <span className="text-purplish-blue text-xl font-bold">{!plan.isYearly && '+'}${total}/{plan.isYearly ? 'yr' : 'mo'}</span>
      </div>

      <div className="mt-auto w-full flex items-center justify-between fixed md:static p-3 md:p-0 bottom-0 left-0 md:bg-auto bg-white">
        
        <Button 
          onClick={handleGoBackClick} 
          variant="secondary"
        >
          Go Back
        </Button>

        <Button 
          type="submit" 
          variant="tertiary"
        >
          Confirm
        </Button>

      </div>
    </form>
  )
}