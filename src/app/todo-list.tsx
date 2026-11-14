import { getTodos, toggleTodo, deleteTodo } from "./actions";
import { Cross } from "./cross";
import { Tick } from "./tick";

export async function TodoList() {
  const todos = await getTodos();

  return (
    <ul className="space-y-2">
      {todos.map((t, i) => (
        <li
          key={t.id}
          className="flex items-center gap-3 border p-3 rounded mb-[20px] text-[30px] border-gray-300"
        >
          <span
            className={`flex-1 ${t.done ? "line-through text-gray-400" : ""}`}
          >
            {i + 1}. {t.text}
          </span>
          <form
            action={async () => {
              "use server";
              await toggleTodo(t.id);
            }}
          >
            <button
              type="submit"
              className={t.done ? "line-through text-gray-400" : ""}
            >
              {<Tick className="w-[40px] h-[40px] cursor-pointer p-[5px]" />}
            </button>
          </form>
          <form
            action={async () => {
              "use server";
              await deleteTodo(t.id);
            }}
          >
            <button type="submit" className="text-red-500">
              {<Cross className="w-[40px] h-[40px] cursor-pointer p-[5px]" />}
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
