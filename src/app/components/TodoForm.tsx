import { addTodo } from "../actions";

function TodoForm() {
  return (
    <form action={addTodo} className="flex gap-2 mb-6">
      <input
        name="text"
        placeholder="Что нужно сделать?"
        className="border p-2 flex-1 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded cursor-pointer"
      >
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
