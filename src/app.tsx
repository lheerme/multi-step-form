import { Steps } from "./components/steps";

export function App() {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      {/* CONTENT */}
      <div className="rounded-xl w-full max-w-6xl min-h-[35.5rem] flex bg-white p-4 shadow-lg">
        {/* STEPS */}
        <Steps />
      </div>
    </div>
  )
}
