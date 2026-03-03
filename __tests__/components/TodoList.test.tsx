import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TodoList } from '../../components/TodoList';

describe('TodoList', () => {
  it('shows empty state when no items', () => {
    render(
      <TodoList items={[]} onToggle={jest.fn()} onRemove={jest.fn()} />
    );
    expect(screen.getByText('No tasks yet')).toBeTruthy();
    expect(screen.getByText('Add one above to get started.')).toBeTruthy();
  });

  it('renders list of TodoItems', () => {
    const items = [
      { id: '1', title: 'First', done: false, createdAt: 0 },
      { id: '2', title: 'Second', done: true, createdAt: 1 },
    ];
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(
      <TodoList items={items} onToggle={onToggle} onRemove={onRemove} />
    );
    expect(screen.getByText('First')).toBeTruthy();
    expect(screen.getByText('Second')).toBeTruthy();
  });

  it('calls onToggle when item is toggled', () => {
    const items = [{ id: '1', title: 'Only', done: false, createdAt: 0 }];
    const onToggle = jest.fn();
    render(
      <TodoList items={items} onToggle={onToggle} onRemove={jest.fn()} />
    );
    const label = screen.getByText('Only');
    fireEvent.press(screen.getByTestId('todo-toggle-1'));
    expect(onToggle).toHaveBeenCalledWith('1');
  });

  it('calls onRemove when remove is pressed', () => {
    const items = [{ id: '1', title: 'Only', done: false, createdAt: 0 }];
    const onRemove = jest.fn();
    render(
      <TodoList items={items} onToggle={jest.fn()} onRemove={onRemove} />
    );
    fireEvent.press(screen.getByTestId('todo-remove-1'));
    expect(onRemove).toHaveBeenCalledWith('1');
  });
});
