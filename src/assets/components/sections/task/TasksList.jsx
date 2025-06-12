import TaskListItem from "../../ui/TaskListItem";

const TasksList = ({ currentStatus, tasks, setTasks }) => {
  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          taskId={task.id}
          taskTitle={task.title}
          completed={task.completed}
          onClickCheckbox={() => handleCompleteTask(task.id)}
          onClickDeleteBtn={() => deleteTask(task.id)}
          currentStatus={currentStatus}
        ></TaskListItem>
      ))}
    </ul>
  );
};

export default TasksList;
