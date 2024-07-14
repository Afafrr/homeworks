import { useState } from "react";
import { taskValidation } from "../helpers/taskValidation";

export const CreateTodoTask = ({ taskState, setErrorMsg }) => {
  const [taskInput, setTaskInput] = useState("");
  const { taskList, setTaskList } = taskState;

  const handleAddClick = () => {
    setErrorMsg("");
    //fun return either error message or false if it's fine
    let validationOutput = taskValidation(taskInput, taskList);
    const taskListIncludes = taskList.some((item) => item.value === taskInput);

    if (taskListIncludes)
      validationOutput = "Task already exists in TODO list!";

    if (!validationOutput && !taskListIncludes) {
      setTaskList([...taskList, { value: taskInput, isChecked: false }]);
    } else {
      setErrorMsg(validationOutput);
    }
    setTaskInput("");
  };
  return (
    <div className="todo__create-task-wrapper">
      <input
        className="todo__input"
        type="text"
        onChange={(e) => setTaskInput(e.target.value)}
        value={taskInput}
      />
      <a className="create-task__button" type="button" onClick={handleAddClick}>
        <p className="create-task__button-text">Add</p>
      </a>
    </div>
  );
};
