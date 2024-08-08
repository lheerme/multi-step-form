import { ComponentProps } from "react";

export function StepButtonDesc(props: ComponentProps<'span'>) {
  return (
    <span {...props} className="text-xs font-medium text-pastel-blue" />
  )
}