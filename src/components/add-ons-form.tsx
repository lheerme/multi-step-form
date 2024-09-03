import { CheckIcon } from "lucide-react"
import { FormHeader } from "./form-header"
import * as Checkbox from '@radix-ui/react-checkbox'
import { Button } from "./button"
import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDataStore } from "../store/use-data-store"
import { useShallow } from "zustand/react/shallow"

const addOnsSchema = z.object({
  onlineService: z.boolean(),
  largerStorage: z.boolean(),
  customizableProfile: z.boolean()
})

type AddOnsSchema = z.infer<typeof addOnsSchema>

export function AddOnsForm() {
  const { addOns, setAddOns, currentStep, setCurrentStep, plan: { isYearly } } = useDataStore(
    useShallow((state) => ({
      addOns: state.addOns,
      setAddOns: state.setAddOns,
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      plan: state.plan,
    })),
  )

  const { control, handleSubmit } = useForm<AddOnsSchema>({
    resolver: zodResolver(addOnsSchema),
    defaultValues: addOns
  })

  function handleFormSubmit(data: AddOnsSchema) {
    const { onlineService, largerStorage, customizableProfile } = data

    setAddOns({
      onlineService,
      largerStorage,
      customizableProfile
    })

    setCurrentStep(4)
  }

  function handleGoBackClick() {
    setCurrentStep(currentStep - 1)
  }

  return (
    <form
      className="w-full max-w-lg py-2 px-3 md:py-4 md:px-6 flex-1 flex flex-col gap-3 md:gap-6 mx-auto"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormHeader.Root>
        <FormHeader.Title>
          Pick add-ons
        </FormHeader.Title>
        <FormHeader.Desc>
          Add-ons help enhance your gaming experience.
        </FormHeader.Desc>
      </FormHeader.Root>

      <label 
        htmlFor="online-service"
        className="flex items-center gap-2 md:gap-5 rounded-md ring-1 ring-light-gray px-5 py-4 cursor-pointer has-[:checked]:ring-purplish-blue has-[:checked]:bg-pastel-blue/10 hover:ring-purplish-blue transition-all"
      >
        <Controller
          control={control}
          name="onlineService"
          render={({ field }) => {
            return (
              <Checkbox.Root 
                className="size-4 rounded-sm bg-transparent ring-1 ring-light-gray flex items-center justify-center data-[state=checked]:bg-purplish-blue data-[state=checked]:ring-purplish-blue transition-colors"  
                id="online-service"
                checked={field.value}
                onCheckedChange={field.onChange}
              >
                <Checkbox.Indicator className="text-white">
                  <CheckIcon className="size-3.5" />
                </Checkbox.Indicator>
              </Checkbox.Root>
            )
          }}
        />

        <div className="flex flex-col">
          <p className="text-marine-blue font-semibold text-sm md:text-base">Online service</p>
          <p className="text-cool-gray text-xs md:text-sm">Access to multiplayer games</p>
        </div>

        <span className="text-sm text-purplish-blue ml-auto">+${isYearly ? 1*10 : 1}/{isYearly ? 'yr' : 'mo'}</span>
      </label>

      <label 
        htmlFor="larger-storage"
        className="flex items-center gap-2 md:gap-5 rounded-md ring-1 ring-light-gray px-5 py-4 cursor-pointer has-[:checked]:ring-purplish-blue has-[:checked]:bg-pastel-blue/10 hover:ring-purplish-blue transition-all"
      >
        <Controller
          control={control}
          name="largerStorage"
          render={({ field }) => {
            return (
              <Checkbox.Root 
              className="size-4 rounded-sm bg-transparent ring-1 ring-light-gray flex items-center justify-center data-[state=checked]:bg-purplish-blue data-[state=checked]:ring-purplish-blue transition-colors"  
              id="larger-storage"
              checked={field.value}
              onCheckedChange={field.onChange}
            >
              <Checkbox.Indicator className="text-white">
                <CheckIcon className="size-3.5" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            )
          }}
        />

        <div className="flex flex-col">
          <p className="text-marine-blue font-semibold text-sm md:text-base">Large storage</p>
          <p className="text-cool-gray text-xs md:text-sm">Extra 1TB of cloud save</p>
        </div>

        <span className="text-sm text-purplish-blue ml-auto">+${isYearly ? 2*10 : 2}/{isYearly ? 'yr' : 'mo'}</span>
      </label>

      <label 
        htmlFor="customizable-profile"
        className="flex items-center gap-2 md:gap-5 rounded-md ring-1 ring-light-gray px-5 py-4 cursor-pointer has-[:checked]:ring-purplish-blue has-[:checked]:bg-pastel-blue/10 hover:ring-purplish-blue transition-all"
      >
        <Controller
          control={control}
          name="customizableProfile"
          render={({ field }) => {
            return (
            <Checkbox.Root 
              className="size-4 rounded-sm bg-transparent ring-1 ring-light-gray flex items-center justify-center data-[state=checked]:bg-purplish-blue data-[state=checked]:ring-purplish-blue transition-colors"  
              id="customizable-profile"
              checked={field.value}
              onCheckedChange={field.onChange}
            >
              <Checkbox.Indicator className="text-white">
                <CheckIcon className="size-3.5" />
              </Checkbox.Indicator>
            </Checkbox.Root>
              )
            }}
        />

        <div className="flex flex-col">
          <p className="text-marine-blue font-semibold text-sm md:text-base">Customizable profile</p>
          <p className="text-cool-gray text-xs md:text-sm">Custom theme on your profile</p>
        </div>

        <span className="text-sm text-purplish-blue ml-auto">+${isYearly ? 2*10 : 2}/{isYearly ? 'yr' : 'mo'}</span>
      </label>

      <div className="mt-auto w-full flex items-center justify-between fixed md:static p-3 md:p-0 bottom-0 left-0 md:bg-auto bg-white">
        
        <Button onClick={handleGoBackClick} variant="secondary">
          Go Back
        </Button>

        <Button type="submit">
          Next Step
        </Button>

      </div>
    </form>
  )
}