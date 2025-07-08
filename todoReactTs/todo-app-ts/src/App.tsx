import React, { useState, useEffect } from 'react'
import { Todos } from './components/Todos';
import { type TodoId, type Todo as TodoType } from './types';
import { TODO_FILTERS, type FilterValue } from './consts';
import { Footer } from './components/Footer';

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

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

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter);
  }

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return true;
  });

  return (
    <div className="todoapp">
      <Todos 
        todos={filteredTodos} 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  )
}

export default App
