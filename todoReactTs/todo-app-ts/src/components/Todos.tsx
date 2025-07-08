import { type ListOfTodos } from "../types";

interface Props {
  todos: ListOfTodos;
}
//! <Props> es un generico que se puede usar para cualquier tipo de props
export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}