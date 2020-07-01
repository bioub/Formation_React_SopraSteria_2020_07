import React, { useState, useCallback } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [newTodoText, setNewTodoText] = useState("Achet");
  const [todos, setTodos] = useState((new Array(1000)).fill({}).map((el) => ( {
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    completed: Math.random() > 0.5,
    title: "Text",
  })));
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

  const handleDeleteTodo = useCallback(function handleDeleteTodo(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }, [todos]);

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
