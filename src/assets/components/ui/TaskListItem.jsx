import IconTrash from "../icons/IconTrash";

const TaskListItem = ({
  currentStatus,
  taskId,
  taskTitle,
  completed,
  onClickCheckbox,
  onClickDeleteBtn,
}) => {
  const stylesComponent =
    currentStatus === "pomodoro"
      ? "bg-golden-sand-400"
      : currentStatus === "short-break"
      ? "bg-ziggurat-400"
      : "bg-cruise-400"

  return (
    <li className={`flex justify-between mt-5 rounded-xl gap-3 p-5 shadow-xs ${stylesComponent}`}>
      <input
        type="checkbox"
        checked={completed}
        id={taskTitle}
        name={taskTitle}
        onChange={onClickCheckbox}
        className="cursor-pointer w-5 h-5 appearance-none border border-solid rounded-full checked:bg-[url(../src/assets/components/icons/checkTask.svg)]"
      />
      <label htmlFor={taskTitle} id={taskId} className=" flex-1/2">
        {taskTitle}
      </label>
      <button
        onClick={onClickDeleteBtn}
        className="cursor-pointer hover:scale-110"
      >
        <IconTrash />
      </button>
    </li>
  );
};

export default TaskListItem;
