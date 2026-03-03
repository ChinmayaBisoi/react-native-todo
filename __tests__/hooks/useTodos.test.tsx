import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { useTodos } from '../../hooks/useTodos';
import { TodoInput, TodoList } from '../../components';

function TestHost({ initial = [] }: { initial?: Array<{ id: string; title: string; done: boolean; createdAt: number }> }) {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos(initial);
  return (
    <>
      <TodoInput onSubmit={addTodo} />
      <TodoList items={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </>
  );
}

describe('useTodos', () => {
  it('starts with empty list', () => {
    render(<TestHost />);
    expect(screen.getByText('No tasks')).toBeTruthy();
  });

  it('accepts initial todos', () => {
    const initial = [
      { id: '1', title: 'A', done: false, createdAt: 0 },
      { id: '2', title: 'B', done: true, createdAt: 1 },
    ];
    render(<TestHost initial={initial} />);
    expect(screen.getByText('A')).toBeTruthy();
    expect(screen.getByText('B')).toBeTruthy();
  });

  it('addTodo appends a new todo', () => {
    render(<TestHost />);
    fireEvent.changeText(screen.getByPlaceholderText('Add a task…'), 'New task');
    fireEvent.press(screen.getByText('Add'));
    expect(screen.getByText('New task')).toBeTruthy();
  });

  it('toggleTodo flips done', () => {
    const initial = [{ id: '1', title: 'T', done: false, createdAt: 0 }];
    render(<TestHost initial={initial} />);
    fireEvent.press(screen.getByTestId('todo-toggle-1'));
    const label = screen.getByText('T');
    const styles = Array.isArray(label.props.style) ? label.props.style : [label.props.style];
    expect(styles.some((s: { textDecorationLine?: string }) => s?.textDecorationLine === 'line-through')).toBe(true);
  });

  it('removeTodo removes by id', () => {
    const initial = [
      { id: '1', title: 'A', done: false, createdAt: 0 },
      { id: '2', title: 'B', done: false, createdAt: 1 },
    ];
    render(<TestHost initial={initial} />);
    fireEvent.press(screen.getByTestId('todo-remove-1'));
    expect(screen.queryByText('A')).toBeNull();
    expect(screen.getByText('B')).toBeTruthy();
  });
});
