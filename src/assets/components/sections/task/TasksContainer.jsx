import { useEffect, useState } from "react"

import TasksHeader from "./TasksHeader"
import TasksList from "./TasksList"

const TasksContainer = ({ currentStatus }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const stylesComponent =
    currentStatus === "pomodoro"
      ? "bg-golden-sand-200"
      : currentStatus === "short-break"
      ? "bg-ziggurat-200"
      : "bg-cruise-200"

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    tasks.map((task) => {
      const taskLabel = document.getElementById(task.id)
      if (taskLabel) {
        task.completed
          ? taskLabel.classList.add("line-through")
          : taskLabel.classList.remove("line-through")
      }
    })
  }, [tasks])

  return (
    <section className={`p-5 rounded-3xl shadow-sm ${stylesComponent} lg:w-[45%] lg:my-16 lg:mx-0 lg:self-start lg:max-h-[70dvh] overflow-auto`}>
      <TasksHeader setTasks={setTasks} currentStatus={currentStatus} />
      <TasksList currentStatus={currentStatus} tasks={tasks} setTasks={setTasks} />
    </section>
  )
}

export default TasksContainer