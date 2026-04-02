function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul>
    {todos.map((todo) => (
        <li key={todo.id}>
        <span
            onClick={() => onToggle(todo.id)}
            style={{
            textDecoration: todo.done ? "line-through" : "none",
            cursor: "pointer",
            marginRight: "10px",
            }}
        >
            {todo.text}
        </span>

        <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    ))}
    </ul>
);
}

export default TodoList;