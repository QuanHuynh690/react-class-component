import React from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
interface Props {
  todos: Todo[];
  markComplete: (id: string) => void;
}
class Todos extends React.Component<Props> {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}
export default Todos;
