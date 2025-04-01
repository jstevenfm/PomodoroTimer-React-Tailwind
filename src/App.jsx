import Header from "./assets/components/sections/header/Header"
import TasksContainer from "./assets/components/sections/task/TasksContainer"
import TimerContainer from "./assets/components/sections/timer/TimerContainer"

function App() {

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <TimerContainer />
        <TasksContainer />
      </main>
    </>
  )
}

export default App
