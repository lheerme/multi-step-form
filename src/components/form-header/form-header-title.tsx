import { ComponentProps } from "react";

export function FormHeaderTitle(props: ComponentProps<'h1'>) {
  return <h1 {...props} className="text-marine-blue text-4xl font-bold" />
}