import { useEffect, useState } from "react"

import TasksHeader from "./TasksHeader"
import TasksList from "./TasksList"

const TasksContainer = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <section className="p-5 rounded-3xl bg-yellow-100 shadow-sm">
      <TasksHeader setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </section>
  )
}

export default TasksContainer