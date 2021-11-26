import React from "react";

export const TodoList: React.FC<{ text: string }> = (props) => (
  <li>{props.text}</li>
);
