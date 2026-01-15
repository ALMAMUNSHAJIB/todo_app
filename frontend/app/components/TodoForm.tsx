'use client';

import { useState } from 'react';
import api from '../lib/api';

export default function TodoForm({ onAdd }: { onAdd: () => void }) {
  const [title, setTitle] = useState('');

  const submit = async () => {
    await api.post('/todos', { title });
    setTitle('');
    onAdd();
  };

  return (
    <div className="flex gap-2">
      <input
        className="border p-2 flex-1"
        placeholder="New todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={submit}
        className="bg-blue-600 text-white px-4">
        Add
      </button>
    </div>
  );
}
