import { useState, useRef, useContext } from "react";
import { ACTIONS } from "../helpers/TaskReducer";
import { TaskDispatchContext, TaskContext } from "../helpers/TasksContext";
import { useValidationHook } from "../hooks/useValidationHook";
import { ErrorContext } from "../App";

export const CreateTodoTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const taskList = useContext(TaskContext);
  const { validate } = useValidationHook();
  const setErrorMsg = useContext(ErrorContext);
  const inputRef = useRef();

  const handleAddClick = () => {
    setErrorMsg("");
    let validation = validate(taskInput);
    const taskListIncludes = taskList.some((item) => item.text === taskInput);
    if (taskListIncludes) validation = "Task already exists in TODO list!";
    if (!validation) {
      dispatch({
        type: ACTIONS.ADD,
        value: { text: taskInput, isChecked: false },
      });
      inputRef.current.focus();
      setTaskInput("");
    } else {
      setErrorMsg(validation);
    }
  };
  return (
    <div className="todo__create-task-wrapper ">
      <input
        className="todo__input"
        type="text"
        onChange={(e) => setTaskInput(e.target.value)}
        value={taskInput}
        ref={inputRef}
      />
      <a
        className="create-task__button btn"
        type="button"
        onClick={handleAddClick}
      >
        <p className="create-task__button-text">Add</p>
      </a>
    </div>
  );
};
