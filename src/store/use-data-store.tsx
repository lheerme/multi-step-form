import { create } from 'zustand'

interface Store {
  currentStep: number
  setCurrentStep: (arg0: number) => void
}

export const useDataStore = create<Store>((set) => ({
  currentStep: 1,
  setCurrentStep: (arg0: number) => set({ currentStep: arg0 }),
}))
