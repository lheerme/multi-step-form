import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
import { useDataStore } from "../store/use-data-store"
import { FormHeader } from "./form-header"
import { Button } from "./button"
import { useShallow } from "zustand/react/shallow"

const personalInfoSchema = z.object({
  name: z.string().min(1, 'This field is required'),
  email: z.string()
    .min(1, 'This field is required')
    .email('Invalid email address'),
  phone: z.string()
    .min(1, 'This field is required')
    .regex(/^\+?\d{1,4}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/i, "Invalid phone number")
    .refine(value => {
      const digits = value.replace(/\D/g, '');
      return digits.length >= 10;
    }, {
      message: "Invalid phone number"
    })
})

type PersonalInfoSchema = z.infer<typeof personalInfoSchema>

export function PersonalInfoForm() {
  const { setCurrentStep, personalInfo, setPersonalInfo } = useDataStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      personalInfo: state.personalInfo,
      setPersonalInfo: state.setPersonalInfo
    })),
  )

  const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: personalInfo || undefined
  })

  function handlePersonalInfoSubmit(data: PersonalInfoSchema) {
    const { email, name, phone } = data
    setCurrentStep(2)
    setPersonalInfo({
      email,
      name,
      phone
    })
  }

  return (
    <form 
      onSubmit={handleSubmit(handlePersonalInfoSubmit)}
      className="w-full max-w-lg py-4 px-6 flex-1 flex flex-col gap-6 mx-auto"
    >
      <FormHeader.Root>
        <FormHeader.Title>
          Personal info
        </FormHeader.Title>
        <FormHeader.Desc>
          Please provide your name, email address, and phone number.
        </FormHeader.Desc>
      </FormHeader.Root>

      <div className="flex flex-col gap-2 relative">
        <span className="text-marine-blue text-sm font-medium">Name</span>
        {errors.name && (
          <span className="text-sm text-strawberry-red font-semibold absolute right-0 top-0">{errors.name?.message}</span>
        )}
        <input 
          type="text" 
          id="name"
          placeholder="e.g. Stephen King"
          className={twMerge(
            'outline-none ring-1 ring-light-gray rounded-lg text-marine-blue px-4 py-3 text-lg font-medium focus:ring-purplish-blue transition-shadow shadow-sm',
            errors.name && 'ring-strawberry-red focus:ring-strawberry-red'
          )}
          {...register('name')}
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <span className="text-marine-blue text-sm font-medium">Email Address</span>
        {errors.email && (
          <span className="text-sm text-strawberry-red font-semibold absolute right-0 top-0">{errors.email?.message}</span>
        )}
        <input 
          type="email" 
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          className={twMerge(
            'outline-none ring-1 ring-light-gray rounded-lg text-marine-blue px-4 py-3 text-lg font-medium focus:ring-purplish-blue transition-shadow shadow-sm',
            errors.email && 'ring-strawberry-red focus:ring-strawberry-red'
          )}
          {...register('email')}
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <span className="text-marine-blue text-sm font-medium">Phone Number</span>
        {errors.phone && (
          <span className="text-sm text-strawberry-red font-semibold absolute right-0 top-0">{errors.phone?.message}</span>
        )}
        <input 
          type="tel"
          placeholder="e.g. +1 234 567 890"
          inputMode="numeric"
          pattern="[0-9+\-\(\)\s]*"
          className={twMerge(
            'outline-none ring-1 ring-light-gray rounded-lg text-marine-blue px-4 py-3 text-lg font-medium focus:ring-purplish-blue transition-shadow shadow-sm',
            errors.phone && 'ring-strawberry-red focus:ring-strawberry-red'
          )}
          {...register('phone')}
          onKeyDown={(e) => {
            const validKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab', 'Enter']
            const isNumber = /[0-9]/.test(e.key)
            const isSpecialChar = ['+', '-', '(', ')', ' '].includes(e.key)
            
            if (!isNumber && !isSpecialChar && !validKeys.includes(e.key)) {
              e.preventDefault()
            }
          }}
        />
      </div>

      <Button type="submit" className="mt-auto ml-auto">
        Next Step
      </Button>

    </form>
  )
}