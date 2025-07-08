import React, { useState, useEffect } from 'react'
import { Todos } from './components/Todos';
import { type TodoId, type Todo as TodoType } from './types';

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

  const handleRemove = ({id}: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleCompleted = (
    {id, completed}: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className="todoapp">
      <Todos 
        todos={todos} 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
