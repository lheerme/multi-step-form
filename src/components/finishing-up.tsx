import { FormHeader } from "./form-header";

export function FinishingUp() {
  return (
    <form
      className="w-full max-w-lg py-4 px-6 flex-1 flex flex-col gap-6 mx-auto"
      // onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormHeader.Root>
        <FormHeader.Title>
          Finishing Up
        </FormHeader.Title>
        <FormHeader.Desc>
          Double-check everything looks OK before confirming.
        </FormHeader.Desc>
      </FormHeader.Root>
    </form>
  )
}