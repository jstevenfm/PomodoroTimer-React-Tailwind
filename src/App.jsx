import Header from "./assets/components/sections/header/Header"
import TimerContainer from "./assets/components/sections/timer/TimerContainer"

function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <TimerContainer />
      </main>
    </>
  )
}

export default App
