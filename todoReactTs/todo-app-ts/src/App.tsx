import React, { useState, useEffect } from 'react'
import { Todos } from './components/Todos';

const mockTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: true,
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false,
  },
  {
    id: '3',
    title: 'Learn Next.js',
    completed: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);

  useEffect(() => {
    document.body.classList.add('dark-mode');
    // Si quieres volver a light, usa: document.body.classList.remove('dark-mode');
  }, []);

  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="todoapp">
      <Todos 
        todos={todos} 
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
