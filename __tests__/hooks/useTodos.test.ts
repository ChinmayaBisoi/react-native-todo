import { renderHook, act } from '@testing-library/react';
import { useTodos } from '../../hooks/useTodos';

describe('useTodos', () => {
  it('starts with empty list', () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual([]);
    expect(result.current.doneCount).toBe(0);
  });

  it('accepts initial todos', () => {
    const initial = [
      { id: '1', title: 'A', done: false, createdAt: 0 },
      { id: '2', title: 'B', done: true, createdAt: 1 },
    ];
    const { result } = renderHook(() => useTodos(initial));
    expect(result.current.todos).toHaveLength(2);
    expect(result.current.doneCount).toBe(1);
  });

  it('addTodo appends a new todo', () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo('New task');
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe('New task');
    expect(result.current.todos[0].done).toBe(false);
    expect(result.current.doneCount).toBe(0);
  });

  it('toggleTodo flips done', () => {
    const initial = [{ id: '1', title: 'T', done: false, createdAt: 0 }];
    const { result } = renderHook(() => useTodos(initial));
    act(() => {
      result.current.toggleTodo('1');
    });
    expect(result.current.todos[0].done).toBe(true);
    expect(result.current.doneCount).toBe(1);
    act(() => {
      result.current.toggleTodo('1');
    });
    expect(result.current.todos[0].done).toBe(false);
    expect(result.current.doneCount).toBe(0);
  });

  it('removeTodo removes by id', () => {
    const initial = [
      { id: '1', title: 'A', done: false, createdAt: 0 },
      { id: '2', title: 'B', done: false, createdAt: 1 },
    ];
    const { result } = renderHook(() => useTodos(initial));
    act(() => {
      result.current.removeTodo('1');
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].id).toBe('2');
  });
});
