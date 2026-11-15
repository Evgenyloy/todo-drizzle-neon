import { toggleTodo, deleteTodo } from "../actions";
import { Cross } from "../components/Icons";
import { Tick } from "../components/Icons";

type Todo = {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
};

async function TodoItem({ todo, index }: { todo: Todo; index: number }) {
  return (
    <li
      key={todo.id}
      className="flex items-center gap-3 border p-3 rounded mb-[20px] text-[30px] border-gray-300"
    >
      <span
        className={`flex-1 ${todo.done ? "line-through text-gray-400" : ""}`}
      >
        {index + 1}. {todo.text}
      </span>
      <form
        action={async () => {
          "use server";
          await toggleTodo(todo.id);
        }}
      >
        <button
          type="submit"
          className={todo.done ? "line-through text-gray-400" : ""}
        >
          {<Tick className="w-[40px] h-[40px] cursor-pointer p-[5px]" />}
        </button>
      </form>
      <form
        action={async () => {
          "use server";
          await deleteTodo(todo.id);
        }}
      >
        <button type="submit" className="text-red-500">
          {<Cross className="w-[40px] h-[40px] cursor-pointer p-[5px]" />}
        </button>
      </form>
    </li>
  );
}

export default TodoItem;
