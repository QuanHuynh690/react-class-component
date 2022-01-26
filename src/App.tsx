import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./types/todo";

type MyState = {
  todos: Todo[];
};
class App extends React.Component {
  state: MyState = {
    todos: [
      { id: "1", title: "Join an interview", completed: true },
      { id: "2", title: "Finish the website", completed: false },
      { id: "3", title: "Meeting with boss", completed: true },
    ],
  };
  markComplete = (id: string) => {
    console.log("id :>> ", id);
    this.setState({
      todos: this.state.todos.map((todo: Todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
