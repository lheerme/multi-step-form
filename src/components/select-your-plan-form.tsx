import { FormHeader } from "./form-header"
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Switch from '@radix-ui/react-switch'
import iconArcade from '../assets/icon-arcade.svg'
import iconAdvanced from '../assets/icon-advanced.svg'
import iconPro from '../assets/icon-pro.svg'
import { twMerge } from "tailwind-merge"
import { Button } from "./button"
import { useDataStore } from "../store/use-data-store"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { planPrices } from "../lib/plan-prices"
import { useShallow } from "zustand/react/shallow"

const planSchema = z.object({
  type: z.enum(['arcade', 'advanced', 'pro']),
  price: z.number().min(1, 'This field is required'),
  isYearly: z.boolean({ required_error: 'This field is required' }),
})

type PlanSchema = z.infer<typeof planSchema>

export function SelectYourPlanForm() {
  const { currentStep, setCurrentStep, plan, setPlan } = useDataStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      plan: state.plan,
      setPlan: state.setPlan,
    })),
  )

  const { control, handleSubmit, setValue, watch } = useForm<PlanSchema>({
    resolver: zodResolver(planSchema),
    defaultValues: plan
  })

  const isYearly = watch('isYearly')
  const planType = watch('type')

  useEffect(() => {
    if (isYearly) {
      setValue('price', planPrices[planType] * 10)
    } else {
      setValue('price', planPrices[planType])
    }
  }, [planType, setValue, isYearly])

  function handleYearlyClick() {
    setValue('isYearly', true)
  }

  function handleMonthlyClick() {
    setValue('isYearly', false)
  }

  function handleGoBackClick() {
    setCurrentStep(currentStep - 1)
  }

  function handleFormSubmit(data: PlanSchema) {
    const { type, isYearly, price } = data
    setCurrentStep(3)

    setPlan({
      type,
      isYearly,
      price
    })
  }

  return (
    <form
      className="w-full max-w-lg py-2 px-3 md:py-4 md:px-6 flex-1 flex flex-col gap-3 md:gap-6 mx-auto"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormHeader.Root>
        <FormHeader.Title>
          Select Your Plan
        </FormHeader.Title>
        <FormHeader.Desc>
          You have the option of monthly or yearly billing.
        </FormHeader.Desc>
      </FormHeader.Root>

      <Controller
        control={control}
        name="type"
        render={({ field }) => {
          return (
            <RadioGroup.Root 
              onValueChange={field.onChange} 
              value={field.value} 
              className="flex flex-col md:flex-row gap-2 justify-between"
            >
              <RadioGroup.Item 
                value="arcade" 
                className={twMerge(
                  'w-full md:w-[8.5rem] rounded-md ring-1 ring-light-gray hover:ring-purplish-blue transition-all relative shadow-sm',
                  isYearly ? ' h-24 md:h-[11.25rem]' : 'h-20 md:h-40'
                )}
              >
                <RadioGroup.Indicator className="size-full block rounded-md ring-1 ring-purplish-blue bg-pastel-blue/10 animate-fade-in" />
                <div className="size-full flex md:flex-col items-center md:items-start gap-3 md:gap-0 md:justify-between absolute left-0 top-0 rounded-md p-4">
                  <img src={iconArcade} alt="arcade icon" />
                  <div className="flex flex-col items-start">
                    <p className="text-marine-blue font-semibold tracking-wide">Arcade</p>
                    <span 
                      className="text-sm text-cool-gray"
                    >
                      ${isYearly ? planPrices.arcade * 10 : planPrices.arcade}/{isYearly ? 'yr' : 'mo'}
                    </span>
                    {isYearly && (
                      <span
                        className="text-xs font-medium text-marine-blue"
                      >
                        2 months free
                      </span>
                    )}
                  </div>
                </div>
              </RadioGroup.Item>
              <RadioGroup.Item 
                value="advanced" 
                className={twMerge(
                  'w-full md:w-[8.5rem] rounded-md ring-1 ring-light-gray hover:ring-purplish-blue transition-all relative shadow-sm',
                  isYearly ? ' h-24 md:h-[11.25rem]' : 'h-20 md:h-40'
                )}
              >
                <RadioGroup.Indicator className="size-full block rounded-md ring-1 ring-purplish-blue bg-pastel-blue/10 animate-fade-in" />
                <div className="size-full flex md:flex-col items-center md:items-start gap-3 md:gap-0 md:justify-between absolute left-0 top-0 rounded-md p-4">
                  <img src={iconAdvanced} alt="arcade icon" />
                  <div className="flex flex-col items-start">
                    <p className="text-marine-blue font-semibold tracking-wide">Advanced</p>
                    <span 
                      className="text-sm text-cool-gray"
                    >
                      ${isYearly ? planPrices.advanced * 10 : planPrices.advanced}/{isYearly ? 'yr' : 'mo'}
                    </span>
                    {isYearly && (
                      <span
                        className="text-xs font-medium text-marine-blue"
                      >
                        2 months free
                      </span>
                    )}
                  </div>
                </div>
              </RadioGroup.Item>
              <RadioGroup.Item 
                value="pro" 
                className={twMerge(
                  'w-full md:w-[8.5rem] rounded-md ring-1 ring-light-gray hover:ring-purplish-blue transition-all relative shadow-sm',
                  isYearly ? ' h-24 md:h-[11.25rem]' : 'h-20 md:h-40'
                )}
              >
                <RadioGroup.Indicator className="size-full block rounded-md ring-1 ring-purplish-blue bg-pastel-blue/10 animate-fade-in" />
                <div className="size-full flex md:flex-col items-center md:items-start gap-3 md:gap-0 md:justify-between absolute left-0 top-0 rounded-md p-4">
                  <img src={iconPro} alt="arcade icon" />
                  <div className="flex flex-col items-start">
                    <p className="text-marine-blue font-semibold tracking-wide">Pro</p>
                    <span 
                      className="text-sm text-cool-gray"
                    >
                      ${isYearly ? planPrices.pro * 10 : planPrices.pro}/{isYearly ? 'yr' : 'mo'}
                    </span>
                    {isYearly && (
                      <span
                        className="text-xs font-medium text-marine-blue"
                      >
                        2 months free
                      </span>
                    )}
                  </div>
                </div>
              </RadioGroup.Item>
            </RadioGroup.Root>
          )
        }}
      />

      <Controller 
        control={control}
        name="isYearly"
        render={({ field }) => {
          return (
            <div className="bg-pastel-blue/10 w-full py-3 flex items-center justify-center gap-3">
              <span 
                className={twMerge('tracking-wide font-semibold text-sm transition-colors',
                  !isYearly ? 'text-marine-blue' : 'text-cool-gray cursor-pointer'
                )}
                onClick={handleMonthlyClick}
              >
                  Monthly
                </span>
              <Switch.Root 
                className="w-9 h-5 bg-marine-blue rounded-full" 
                id="plan-option"
                onCheckedChange={field.onChange}
                checked={field.value}
              >
                <Switch.Thumb className="block size-3 translate-x-1 bg-white rounded-full data-[state=checked]:translate-x-5 transition-transform" />
              </Switch.Root>
              <span 
                className={twMerge('tracking-wide font-semibold text-sm transition-colors',
                  isYearly ? 'text-marine-blue' : 'text-cool-gray cursor-pointer'
                )}
                onClick={handleYearlyClick}
              >
                Yearly
              </span>
            </div>
          )
        }}
      />

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