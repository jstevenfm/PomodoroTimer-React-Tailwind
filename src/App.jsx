import Header from "./assets/components/sections/header/Header"
import TimerControls from "./assets/components/sections/timer/TimerControls"
import TimerCounter from "./assets/components/sections/timer/TimerCounter"
import TimerStatus from "./assets/components/sections/timer/TimerStatus"

function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="flex flex-col items-center justify-center my-14 mx-auto">
          <TimerStatus />
          <TimerCounter />
          <TimerControls />
        </section>
      </main>
    </>
  )
}

export default App
