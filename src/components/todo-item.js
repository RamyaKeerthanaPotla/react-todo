import React from "react";
import "./styles.css";

export const TodoItem = ({
  todo: { title, id, completed },
  handleCompleted,
}) => {
  return (
    <div key={id} className="profile-form">
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
