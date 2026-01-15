'use client';

import { useEffect, useState } from 'react';

import api from './lib/api';
import { Todo } from './types/todo';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'ALL' | 'DONE' | 'PENDING'>('ALL');

  const loadTodos = async () => {
    const res = await api.get('/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const filtered = todos.filter(t =>
    filter === 'ALL'
      ? true
      : filter === 'DONE'
      ? t.completed
      : !t.completed,
  );

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Todo App</h1>

      <TodoForm onAdd={loadTodos} />

      <div className="flex gap-2">
        {['ALL', 'DONE', 'PENDING'].map(f => (
          <button key={f}
            className="border px-3"
            onClick={() => setFilter(f as any)}>
            {f}
          </button>
        ))}
      </div>

      {filtered.map(todo => (
        <TodoItem key={todo.id} todo={todo} onChange={loadTodos} />
      ))}
    </div>
  );
}
