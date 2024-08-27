import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'font-medium text-white py-3 px-6 w-fit',
  variants: {
    variant: {
      primary: 'bg-marine-blue text-white hover:opacity-90 hover:transition-opacity rounded-lg shadow-sm',
      secondary: 'text-cool-gray hover:text-marine-blue hover:transition-colors'
    },
  },
  defaultVariants: {
    variant: 'primary',
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

export function Button(props: ButtonProps) {
  const { className, ...rest } = props

  return (
    <button {...rest} className={twMerge(buttonVariants({ variant: props.variant}), className)} />
  )
}