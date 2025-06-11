import { useState } from 'react'

import { status } from '../src/assets/constants.js'

import Header from "./assets/components/sections/header/Header"
import TasksContainer from "./assets/components/sections/task/TasksContainer"
import TimerContainer from "./assets/components/sections/timer/TimerContainer"

function App() {
  const [currentStatus, setCurrentStatus] = useState(status[0].id);

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <TimerContainer currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} />
        <TasksContainer />
      </main>
    </>
  )
}

export default App
