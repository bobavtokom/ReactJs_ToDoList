import React, {useState} from 'react';
import './App.css';

function App() {
  const[newTodo, setNewTodo] = useState("");
  const[todos,setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);

  function addTodo() {
    if (!newTodo){
     alert("Please enter todo item!");
    }
   const todo = {
    id: Math.floor(Math.random() * 1000),
    value: newTodo,
   }
   setTodos(oldList => [...oldList, todo]);
   setNewTodo("");
  }
  function deleteTodo(id) {
     const deletedTodo = todos.filter(todo => todo.id !== id);
     setTodos(deletedTodo);
  }
  const completeTodo = () => {
    setCompleted(!completed);
  };
  return (
    <div className="App">
     <h1>Todo list</h1>
     <input type="text"
     placeholder='Add todo'
     value={newTodo}
     onChange={e => setNewTodo(e.target.value)}
     />
     <button onClick={() => addTodo()}>Add</button>
     <ul>
     {todos.map(todo => {
      return (
        <li key={todo.id}><span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{todo.value} </span>
        <button className="button-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button className="button-complete" onClick={completeTodo}>{completed ? 'Incomplete' : 'Complete'}</button>
        </li>
      )
     })}
     </ul>
    </div>
  );
}

export default App;
