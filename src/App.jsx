// Packages
import { useState } from 'react'
import cn from 'classnames';

// Projcect
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      content: "Buy pizza",
      completed: false
    },
    {
      content: "Walk 5kms",
      completed: false
    }
  ])
  const [inputValue, setInputValue] = useState("");
  
  const handleAddTodo = () => {
    setTodos([
      ...todos,
      {
        content: inputValue,
        completed: false 
      }
    ]);
  
    setInputValue('');
  }
  
  const toggleStatusTodo = (todoIndex) => {
    const parsedTodos = todos.map((todo, i) => {
      if (i == todoIndex) {
        todo.completed = !todo.completed;
      }

      return todo
    })

    setTodos(parsedTodos);
  };

  const deleteTodo = (todoIndex) => {
    const parsedTodos = [...todos]

    parsedTodos.splice(todoIndex, 1)

    setTodos(parsedTodos);
  };

  return (
    <div>
      <div className='border-2 rounded-lg bg-white px-2 py-8' style={{ width: 500 }}>
        <h1 className='text-2xl font-bold text-black mb-4'>Task Manager</h1>
        <div className='flex mb-4'>
          <input
            id="todoInput" 
            placeholder="Buy groceries..." 
            className='w-full bg-gray-200 border-2 p-2 border-black text-black' 
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='ml-2 rounded-none' onClick={handleAddTodo}>Add</button>
        </div>

        <hr />

        {todos.map((todo, i) => (
          <div className='my-2 flex items-center' key={todo.content}>
            <p className='text-black mr-2'>#{i}</p>
            <p
              className={cn('text-black text-left', { "line-through": todo.completed })}
            >
              {todo.content}
            </p>
            
            <button
              className={cn('ml-auto', {
                "bg-green-500": !todo.completed,
                "bg-blue-500": todo.completed
              })}
              onClick={() => toggleStatusTodo(i)}
            >
              {todo.completed ? "Unmark": "Mark" }
            </button>
            <button className='ml-2 bg-red-500' onClick={() => deleteTodo(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
