import { Suspense } from "react";
import { TodoList } from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "../styles/style.css";

export default function Home() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Мои задачи</h1>
      <TodoForm />
      <Suspense fallback={<p className="text-gray-400">Загружаем задачи…</p>}>
        <TodoList />
      </Suspense>
    </main>
  );
}
