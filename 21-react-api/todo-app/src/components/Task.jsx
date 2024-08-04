import { useState, useRef, useEffect, useContext } from "react";
import deleteImg from "../assets/delete.png";
import writeImg from "../assets/write.png";
import { ACTIONS } from "../helpers/TaskReducer";
import { TaskDispatchContext } from "../helpers/TasksContext";
import { ErrorContext } from "../App";
import { useValidationHook } from "../hooks/useValidationHook";

export const Task = ({ task }) => {
  const dispatch = useContext(TaskDispatchContext);
  const setErrorMsg = useContext(ErrorContext);
  const inputRef = useRef(null);
  const { text: taskText, isChecked } = task;
  const [newTask, setNewTask] = useState(taskText);
  const [isDisabled, setIsDisabled] = useState(true);
  const { validate } = useValidationHook();

  const handleDeleteClick = () => {
    dispatch({ type: ACTIONS.DELETE, value: taskText });
  };
  //fun to handle whether task is checked
  const handleTaskChecked = () => {
    dispatch({ type: ACTIONS.TOGGLE, value: taskText });
  };
  // update input of task after validation
  const handleValueChange = () => {
    setErrorMsg("");
    const validation = validate(newTask);
    if (!validation) {
      dispatch({
        type: ACTIONS.UPDATE,
        value: { text: taskText, newText: newTask },
      });
    } else {
      setErrorMsg(validation);
    }
  };
  // set focus after update button click
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [isDisabled]);
  //makes input possible to change
  const handleUpdateClick = () => {
    setIsDisabled(!isDisabled);
    if (isDisabled === false) {
      handleValueChange();
    }
  };
  return (
    <li className="todo__task">
      {isDisabled ? (
        <div
          className="todo__input"
          onClick={handleTaskChecked}
          style={{ textDecoration: isChecked ? "line-through" : null }}
        >
          {taskText}
        </div>
      ) : (
        <input
          type="text"
          className="todo__input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          ref={inputRef}
        />
      )}
      <div className="todo-task__img-wrapper">
        <a type="button" onClick={handleUpdateClick}>
          <img src={writeImg} className="todo-task__img" alt="write image" />
        </a>
        <a type="button" onClick={handleDeleteClick}>
          <img src={deleteImg} className="todo-task__img" alt="delete image" />
        </a>
      </div>
    </li>
  );
};
