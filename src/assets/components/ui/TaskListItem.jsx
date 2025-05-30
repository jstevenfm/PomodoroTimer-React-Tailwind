const TaskListItem = ({ taskId, taskTitle, completed, onClickCheckbox, onClickDeleteBtn }) => {
  return (

        <li className="flex justify-between mt-5 bg-yellow-300 rounded-xl gap-3 p-3">
          <input type="checkbox" checked={completed} id={taskTitle} name={taskTitle} onChange={onClickCheckbox} className="cursor-pointer" />
          <label htmlFor={taskTitle} id={taskId} className=" flex-1/2">{taskTitle}</label>
          <button onClick={onClickDeleteBtn} className="cursor-pointer hover:scale-110">Delete</button>
        </li>
  )
}

export default TaskListItem