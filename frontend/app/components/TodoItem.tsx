'use client';

import api from "../lib/api";
import { Todo } from "../types/todo";



export default function TodoItem({
  todo,
  onChange,
}: {
  todo: Todo;
  onChange: () => void;
}) {
  const toggle = async () => {
    await api.put(`/todos/${todo.id}`, {
      completed: !todo.completed,
    });
    onChange();
  };

  const remove = async () => {
    await api.delete(`/todos/${todo.id}`);
    onChange();
  };

  return (
    <div className="flex justify-between border p-2">
      <span className={todo.completed ? 'line-through' : ''}>
        {todo.title}
      </span>
      <div className="space-x-2">
        <button onClick={toggle}
          className="text-sm bg-green-500 text-white px-2">
          DONE
        </button>
        <button onClick={remove}
          className="text-sm bg-red-500 text-white px-2">
          Delete
        </button>
      </div>
    </div>
  );
}
