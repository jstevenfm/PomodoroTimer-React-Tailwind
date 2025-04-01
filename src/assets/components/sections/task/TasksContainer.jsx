import Header from "../header/Header"

const TasksContainer = () => {
  return (
    <section className="p-5 rounded-3xl bg-yellow-100 shadow-sm">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Tasks</h2>
        <button className="cursor-pointer">Add Task</button>
      </header>
    </section>
  )
}

export default TasksContainer