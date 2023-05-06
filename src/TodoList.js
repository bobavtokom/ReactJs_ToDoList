import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const text = event.target.elements.todo.value;
    setTodos([...todos, { text, completed: false }]);
    event.target.elements.todo.value = '';
  }

  function handleComplete(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function Todo({ todo, index }) {
    return (
      <div>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <button onClick={() => handleComplete(index)}>
          {todo.completed ? 'Incomplete' : 'Complete'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="Enter a new todo" />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} />
      ))}
    </div>
  );
}

export default TodoList;
