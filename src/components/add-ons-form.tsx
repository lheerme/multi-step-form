import { CheckIcon } from "lucide-react"
import { FormHeader } from "./form-header"
import * as Checkbox from '@radix-ui/react-checkbox'
import { Button } from "./button"
import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDataStore } from "../store/use-data-store"

const addOnsSchema = z.object({
  onlineService: z.boolean(),
  largerStorage: z.boolean(),
  customizableProfile: z.boolean()
})

type AddOnsSchema = z.infer<typeof addOnsSchema>

export function AddOnsForm() {
  const addOns = useDataStore((state) => state.addOns)
  const currentStep = useDataStore((state) => state.currentStep)
  const setCurrentStep = useDataStore((state) => state.setCurrentStep)
  const { isYearly } = useDataStore((state) => state.plan)

  const { control, handleSubmit } = useForm<AddOnsSchema>({
    resolver: zodResolver(addOnsSchema),
    defaultValues: addOns
  })

  function handleFormSubmit(data: AddOnsSchema) {
    console.log(data)
  }

  function handleGoBackClick() {
    setCurrentStep(currentStep - 1)
  }

  return (
    <form
      className="w-full max-w-lg py-4 px-6 flex-1 flex flex-col gap-6 mx-auto"
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
        className="flex items-center gap-5 rounded-md ring-1 ring-cool-gray px-5 py-4 cursor-pointer has-[:checked]:ring-purplish-blue has-[:checked]:bg-pastel-blue/10 hover:ring-purplish-blue transition-all"
      >
        <Controller
          control={control}
          name="onlineService"
          render={({ field }) => {
            return (
              <Checkbox.Root 
                className="size-4 rounded-sm bg-transparent ring-1 ring-cool-gray flex items-center justify-center data-[state=checked]:bg-purplish-blue data-[state=checked]:ring-purplish-blue transition-colors"  
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
          <p className="text-marine-blue font-semibold">Online service</p>
          <p className="text-cool-gray text-sm">Access to multiplayer games</p>
        </div>

        <span className="text-sm text-purplish-blue ml-auto">+${isYearly ? 1*10 : 1}/{isYearly ? 'yr' : 'mo'}</span>
      </label>

      <label 
        htmlFor="larger-storage"
        className="flex items-center gap-5 rounded-md ring-1 ring-cool-gray px-5 py-4 cursor-pointer has-[:checked]:ring-purplish-blue has-[:checked]:bg-pastel-blue/10 hover:ring-purplish-blue transition-all"
      >
        <Controller
          control={control}
          name="largerStorage"
          render={({ field }) => {
            return (
              <Checkbox.Root 
              className="size-4 rounded-sm bg-transparent ring-1 ring-cool-gray flex items-center justify-center data-[state=checked]:bg-purplish-blue data-[state=checked]:ring-purplish-blue transition-colors"  
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
          <p className="text-marine-blue font-semibold">Large storage</p>
          <p className="text-cool-gray text-sm">Extra 1TB of cloud save</p>
        </div>

        <span className="text-sm text-purplish-blue ml-auto">+${isYearly ? 2*10 : 2}/{isYearly ? 'yr' : 'mo'}</span>
      </label>

      <label 
        htmlFor="customizable-profile"
        className="flex items-center gap-5 rounded-md ring-1 ring-cool-gray px-5 py-4 cursor-pointer has-[:checked]:ring-purplish-blue has-[:checked]:bg-pastel-blue/10 hover:ring-purplish-blue transition-all"
      >
        <Controller
          control={control}
          name="customizableProfile"
          render={({ field }) => {
            return (
            <Checkbox.Root 
              className="size-4 rounded-sm bg-transparent ring-1 ring-cool-gray flex items-center justify-center data-[state=checked]:bg-purplish-blue data-[state=checked]:ring-purplish-blue transition-colors"  
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
          <p className="text-marine-blue font-semibold">Customizable profile</p>
          <p className="text-cool-gray text-sm">Custom theme on your profile</p>
        </div>

        <span className="text-sm text-purplish-blue ml-auto">+${isYearly ? 2*10 : 2}/{isYearly ? 'yr' : 'mo'}</span>
      </label>

      <div className="mt-auto w-full flex items-center justify-between">
        
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