import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [newTodoText, setNewTodoText] = useState("Achet");
  const [todos, setTodos] = useState([
    {
      id: 123,
      completed: false,
      title: "Acheter du pain",
    },
    {
      id: 456,
      completed: true,
      title: "Introduction à React",
    },
  ]);
  function handleTodoSubmit(value) {
    // changement muable
    // todos.push({
    //   id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    //   title: value,
    //   completed: false,
    // });
    // setTodos(todos);

    // changement immuable (nouveau tableau créé)
    setTodos([
      ...todos, // SPREAD operator (convertir le tableau en une liste de valeur)
      {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        title: value,
        completed: false,
      },
    ]);
  }
  function handleDeleteTodo(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }
  return (
    <div className="App">
      <TodoForm
        value={newTodoText}
        onValueChange={(value) => setNewTodoText(value)}
        onTodoSubmit={handleTodoSubmit}
      />
      <TodoList items={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
