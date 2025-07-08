import React, { useState } from 'react'
import { Todos } from './components/Todos';

const mockTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: false,
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
  const [todos] = useState(mockTodos);

  return (
    <Todos todos={todos} />
  )
}

export default App
