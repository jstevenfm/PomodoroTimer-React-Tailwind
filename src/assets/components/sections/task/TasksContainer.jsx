import { useState } from "react"

import TasksHeader from "./TasksHeader"
import TasksList from "./TasksList"

const TasksContainer = () => {
  const [tasks, setTasks] = useState([])

  return (
    <section className="p-5 rounded-3xl bg-yellow-100 shadow-sm">
      <TasksHeader setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </section>
  )
}

export default TasksContainer