import { useState } from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAdd(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleDelete(id) {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  }

  function handleToggle(id) {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo App</h1>

      <AddTodo onAdd={handleAdd} />

      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;