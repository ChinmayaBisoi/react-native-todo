import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TodoItem } from '../../components/TodoItem';

const defaultItem = {
  id: '1',
  title: 'Test task',
  done: false,
  createdAt: 0,
};

describe('TodoItem', () => {
  it('renders title', () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(
      <TodoItem item={defaultItem} onToggle={onToggle} onRemove={onRemove} />
    );
    expect(screen.getByText('Test task')).toBeOnTheScreen();
  });

  it('calls onToggle when checkbox is pressed', () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(
      <TodoItem item={defaultItem} onToggle={onToggle} onRemove={onRemove} />
    );
    fireEvent.press(screen.getByTestId('todo-toggle-1'));
    expect(onToggle).toHaveBeenCalledWith('1');
  });

  it('calls onRemove when remove button is pressed', () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(
      <TodoItem item={defaultItem} onToggle={onToggle} onRemove={onRemove} />
    );
    fireEvent.press(screen.getByTestId('todo-remove-1'));
    expect(onRemove).toHaveBeenCalledWith('1');
  });

  it('shows strikethrough when done', () => {
    const doneItem = { ...defaultItem, done: true };
    render(
      <TodoItem
        item={doneItem}
        onToggle={jest.fn()}
        onRemove={jest.fn()}
      />
    );
    const label = screen.getByText('Test task');
    expect(label).toHaveStyle({ textDecorationLine: 'line-through' });
  });
});
