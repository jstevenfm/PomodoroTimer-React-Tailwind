import Header from "./assets/components/sections/header/Header"
import TimerStatus from "./assets/components/sections/timer/TimerStatus"

function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="flex flex-col items-center justify-center my-14 mx-auto">
          <TimerStatus />
        </section>
      </main>
    </>
  )
}

export default App
