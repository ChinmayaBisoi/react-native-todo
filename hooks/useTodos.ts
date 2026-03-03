import { useCallback, useState } from 'react';
import type { Todo } from '../types';
import { genId } from '../lib/id';

export function useTodos(initial: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initial);

  const addTodo = useCallback((title: string) => {
    setTodos((prev) => [
      { id: genId(), title, done: false, createdAt: Date.now() },
      ...prev,
    ]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const doneCount = todos.filter((t) => t.done).length;

  return { todos, addTodo, toggleTodo, removeTodo, doneCount };
}
