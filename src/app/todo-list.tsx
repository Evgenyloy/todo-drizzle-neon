import { getTodos, toggleTodo, deleteTodo } from './actions';

export async function TodoList() {
  const todos = await getTodos();

  return (
    <ul className="space-y-2">
      {todos.map((t) => (
        <li key={t.id} className="flex items-center gap-3 border p-3 rounded">
          <form
            action={async () => {
              'use server';
              await toggleTodo(t.id);
            }}
          >
            <button type="submit" className={t.done ? 'line-through text-gray-400' : ''}>
              {t.done ? '✅' : '⬜'}
            </button>
          </form>
          <span className={`flex-1 ${t.done ? 'line-through text-gray-400' : ''}`}>
            {t.text}
          </span>
          <form
            action={async () => {
              'use server';
              await deleteTodo(t.id);
            }}
          >
            <button type="submit" className="text-red-500">
              Удалить
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}