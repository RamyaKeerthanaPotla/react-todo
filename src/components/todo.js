import React, { useState } from "react";
import as from "../App.css";
import { TodoItem } from "./todo-item";
import { v4 as uuidv4 } from "uuid";

const Todos = [
  {
    id: uuidv4(),
    title: "Walking",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Jumping",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "running",
    completed: false,
  },
];

const Todo = () => {
  const [list, setList] = useState("");
  const [todoArray, setTodoArray] = useState(Todos);
  const handleClick = () => {
    setList("");
    const newTodo = {
      id: uuidv4(),
      title: list,
      completed: false,
    };
    setTodoArray(todoArray.concat([newTodo]));
  };
  const handleCompleted = (todoId) => {
    const updatedTodo = todoArray.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoArray(updatedTodo);
  };
  return (
    <>
      <div className="common-flex">
        <input
          type="text"
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      {todoArray.map((todo) => (
        <TodoItem todo={todo} handleCompleted={handleCompleted} />
      ))}
    </>
  );
};

export default Todo;
