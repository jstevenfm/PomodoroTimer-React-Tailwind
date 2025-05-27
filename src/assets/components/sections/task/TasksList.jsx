const TasksList = ({ tasks, setTasks }) => {
  
  const handleCompleteTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  return (
    <ul>
      {tasks.map( task => (
        <li key={task.id} className="flex justify-between mt-5 bg-yellow-300 rounded-xl gap-3 p-3">
          <input type="checkbox" onClick={() => handleCompleteTask(task.id)} className="cursor-pointer" />
          <p className=" flex-1/2">{task.title}</p>
          <button className="cursor-pointer hover:scale-110">Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TasksList