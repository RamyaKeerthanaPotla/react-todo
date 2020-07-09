import React from "react";

export const TodoItem = ({
  todo: { title, id, completed },
  handleCompleted,
}) => {
  return (
    <div key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCompleted(id)}
      />
      <span style={completed ? { textDecoration: "line-through" } : null}>
        {title}
      </span>
    </div>
  );
};
