
import { getTodos } from "../actions";
import Todo from '../components/TodoItem'

export async function TodoList() {
  const todos = await getTodos();

  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
       <Todo todo={todo} index={index} key={todo.id}/>
      ))}
    </ul>
  );
}
