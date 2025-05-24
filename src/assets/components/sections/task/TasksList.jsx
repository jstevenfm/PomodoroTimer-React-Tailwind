const TasksList = ({ tasks, setTasks }) => {
  return (
    <ul>
      {tasks.map( task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  )
}

export default TasksList