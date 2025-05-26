

import InputNewTask from "./InputNewTask";

const TasksHeader = ({ setTasks }) => {

  return (
    <>
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-medium">Tasks</h2>
        <button className="cursor-pointer" >
          Add Task
        </button>
      </header>
      <InputNewTask setTasks={setTasks} />
    </>
  );
};

export default TasksHeader;
