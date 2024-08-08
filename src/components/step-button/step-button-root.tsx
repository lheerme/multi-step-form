import { ComponentProps } from "react";

export function StepButtonRoot(props: ComponentProps<'button'>) {
  return (
    <button {...props} className="flex items-center gap-4 w-full group" />
  )
}