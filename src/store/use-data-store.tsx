import { create } from 'zustand'

interface PersonalInfo {
  name: string
  email: string
  phone: string
}

interface Plan {
  type: 'arcade' | 'advanced' | 'pro'
  price: number
  isYearly: boolean
}

interface AddOns {
  onlineService: boolean
  largerStorage: boolean
  customizableProfile: boolean
}

interface Store {
  currentStep: number
  setCurrentStep: (arg0: number) => void
  personalInfo: PersonalInfo | null
  setPersonalInfo: (arg0: PersonalInfo) => void
  plan: Plan
  setPlan: (arg0: Plan) => void
  addOns: AddOns
  setAddOns: (arg0: AddOns) => void
}

export const useDataStore = create<Store>((set) => ({
  currentStep: 1,
  setCurrentStep: (arg0: number) => set({ currentStep: arg0 }),
  personalInfo: null,
  setPersonalInfo: (arg0: PersonalInfo) => set({ personalInfo: arg0 }),
  plan: { type: 'arcade', price: 9, isYearly: false },
  setPlan: (arg0: Plan) => set({ plan: arg0 }),
  addOns: { onlineService: false, largerStorage:false, customizableProfile: false },
  setAddOns: (arg0: AddOns) => set({ addOns: arg0 }),
}))
