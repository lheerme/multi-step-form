import { ComponentProps } from "react";

export function StepButtonTitle(props: ComponentProps<'p'>) {
  return (
    <p {...props} className="text-white font-bold tracking-widest text-sm" />
  )
} 