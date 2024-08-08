import { ComponentProps } from "react";

export function StepButtonContent(props: ComponentProps<'div'>) {
  return (
    <div {...props} className="flex flex-col text-left" />
  )
}