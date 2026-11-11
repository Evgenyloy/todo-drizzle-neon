import { Suspense } from "react";
import { addTodo } from "./actions";
import { TodoList } from "./todo-list";

export default function Home() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Мои задачи</h1>

      <form action={addTodo} className="flex gap-2 mb-6">
        <input
          name="text"
          placeholder="Что нужно сделать?"
          className="border p-2 flex-1 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Добавить
        </button>
      </form>

      <Suspense fallback={<p className="text-gray-400">Загружаем задачи…</p>}>
        <TodoList />
      </Suspense>
    </main>
  );
}
