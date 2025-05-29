const TasksList = ({ tasks, setTasks }) => {
  
  const handleCompleteTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    const taskLabel = document.getElementById(id);
    taskLabel ? taskLabel.classList.toggle('line-through') : null;
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <ul>
      {tasks.map( task => (
        <li key={task.id} className="flex justify-between mt-5 bg-yellow-300 rounded-xl gap-3 p-3">
          <input type="checkbox" id={task.title} name={task.title} onClick={() => handleCompleteTask(task.id)} className="cursor-pointer" />
          <label htmlFor={task.title} id={task.id} className=" flex-1/2">{task.title}</label>
          <button onClick={() => deleteTask(task.id)} className="cursor-pointer hover:scale-110">Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TasksList