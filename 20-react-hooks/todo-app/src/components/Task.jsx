import { useState, useRef, useEffect } from "react";
import { taskValidation } from "../helpers/taskValidation";
import deleteImg from "../assets/delete.png";
import writeImg from "../assets/write.png";

export const Task = ({ task, taskState, setErrorMsg }) => {
  const { taskList, setTaskList } = taskState;
  const [isDisabled, setIsDisabled] = useState(true);
  const [newTask, setNewTask] = useState(task.value);
  const inputRef = useRef(null);

  //fun to handle whether task is checked
  const handleTaskChecked = () => {
    const taskListWithChecked = taskList.map((item) => {
      if (item.value === task.value) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });

    if (isDisabled) {
      setTaskList(taskListWithChecked);
    }
  };
  //update input of task after validation
  const handleValueChange = () => {
    const validationOutput = taskValidation(newTask, taskList);
    setErrorMsg("");

    if (validationOutput) {
      setErrorMsg(validationOutput);
    } else {
      const taskListValueUpdate = taskList.map((item) => {
        if (item.value === task.value) {
          return { ...item, value: newTask };
        } else {
          return item;
        }
      });
      setTaskList(taskListValueUpdate);
    }
  };
  //set focus after update button click
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
  const handleDeletionClick = () => {
    setTaskList(taskList.filter((item) => item.value !== task.value));
  };

  return (
    <li className="todo__task">
      {isDisabled ? (
        <div
          className="todo__input"
          onClick={handleTaskChecked}
          style={{ textDecoration: task.isChecked ? "line-through" : null }}
        >
          {task.value}
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
        <a type="button" onClick={handleDeletionClick}>
          <img src={deleteImg} className="todo-task__img" alt="delete image" />
        </a>
      </div>
    </li>
  );
};
