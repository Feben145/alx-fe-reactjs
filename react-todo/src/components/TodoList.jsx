import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <input
        type="text"
        className="border p-2 w-full"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
        onClick={addTodo}
      >
        Add Todo
      </button>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between p-2 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
