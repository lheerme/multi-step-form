import iconThankYou from "../assets/icon-thank-you.svg"

export function ThankYouComponent() {
  return (
    <div className="w-full max-w-lg py-10 md:py-4 px-3 md:px-6 flex-1 flex flex-col items-center justify-center gap-4 mx-auto animate-fade-in">
      <img
        src={iconThankYou}
        alt="Thank you icon"
        className="mb-2"
      />
      <h1 className="text-marine-blue text-4xl font-bold">Thank You</h1>
      <p className="text-cool-gray text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}