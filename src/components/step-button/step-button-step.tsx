import { ComponentProps } from "react";

export function StepButtonStep(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className="ring-1 ring-white rounded-full size-9 flex items-center justify-center text-white font-bold group-hover:ring-light-blue group-hover:bg-light-blue group-hover:text-marine-blue transition-colors"
    />
  )
}