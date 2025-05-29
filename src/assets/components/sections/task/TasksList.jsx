import TaskListItem from "../../ui/TaskListItem";

const TasksList = ({ tasks, setTasks }) => {
  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    const taskLabel = document.getElementById(id);
    taskLabel ? taskLabel.classList.toggle("line-through") : null;
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
          onClickCheckbox={() => handleCompleteTask(task.id)}
          onClickDeleteBtn={() => deleteTask(task.id)}
        ></TaskListItem>
      ))}
    </ul>
  );
};

export default TasksList;
