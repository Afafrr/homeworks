import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import App from "../App.jsx";

describe("Task crud without u", () => {
  let input;
  let addBtn;
  let container;
  beforeEach(() => {
    ({ container } = render(<App />));
    input = container.querySelector(".todo__input");
    addBtn = container.querySelector(".create-task__button");
    fireEvent.change(input, { target: { value: "This is added task" } });
  });

  test("input value changes", () => {
    expect(input.value).toBe("This is added task");
  });

  test("task is added after click", () => {
    fireEvent.click(addBtn);
    const task = screen.getByText("This is added task");
    expect(task).toBeInTheDocument();
  });

  test("task is removed after click", () => {
    fireEvent.click(addBtn);
    const delBtn = container.querySelector(".todo-task__img-wrapper a");
    fireEvent.click(delBtn);
    expect(screen.queryByText("This is added task")).not.toBeInTheDocument();
  });
});

describe("Errors", () => {
  let input;
  let addBtn;
  beforeEach(() => {
    const { container } = render(<App />);
    input = container.querySelector(".todo__input");
    addBtn = container.querySelector(".create-task__button");
  });

  test("no input or space provided", () => {
    fireEvent.change(input, { target: { value: "     " } });
    fireEvent.click(addBtn);
    expect(screen.queryByText("Task cannot be empty!")).toBeInTheDocument();
  });

  test("invalid character in input", () => {
    fireEvent.change(input, { target: { value: "invalid@" } });
    fireEvent.click(addBtn);
    expect(screen.queryByText("Invalid characters!")).toBeInTheDocument();
  });

  test("input too long", () => {
    fireEvent.change(input, {
      target: { value: "this sentence is too long 12345" },
    });
    fireEvent.click(addBtn);
    expect(
      screen.queryByText("Task name too long! (max 30 characters)")
    ).toBeInTheDocument();
  });
});
