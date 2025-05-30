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
    <section className="p-5 rounded-3xl bg-yellow-100 shadow-sm">
      <TasksHeader setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </section>
  )
}

export default TasksContainer