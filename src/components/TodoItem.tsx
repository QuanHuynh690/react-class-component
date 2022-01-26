import React, { Component } from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  markComplete: (id: string) => void;
}
export class TodoItem extends Component<Props> {
  //   markComplete = (e: any) => {
  //     console.log("this.props :>> ", e.target.checked);
  //   };
  getStyle = () => {
    return {
      padding: "10px 0",
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #333",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
        </label>
        <button className="deleteIcon">x</button>
      </div>
    );
  }
}

export default TodoItem;
