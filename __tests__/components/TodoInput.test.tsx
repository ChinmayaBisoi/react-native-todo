import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TodoInput } from '../../components/TodoInput';

describe('TodoInput', () => {
  it('renders input and Add button', () => {
    const onSubmit = jest.fn();
    render(<TodoInput onSubmit={onSubmit} />);
    expect(screen.getByPlaceholderText('Add a task…')).toBeTruthy();
    expect(screen.getByText('Add')).toBeTruthy();
  });

  it('calls onSubmit with trimmed title and clears input', () => {
    const onSubmit = jest.fn();
    render(<TodoInput onSubmit={onSubmit} />);
    const input = screen.getByPlaceholderText('Add a task…');
    fireEvent.changeText(input, '  Buy milk  ');
    fireEvent.press(screen.getByText('Add'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith('Buy milk');
    expect(input.props.value).toBe('');
  });

  it('does not call onSubmit when text is empty', () => {
    const onSubmit = jest.fn();
    render(<TodoInput onSubmit={onSubmit} />);
    fireEvent.press(screen.getByText('Add'));
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('disables submit when only whitespace', () => {
    const onSubmit = jest.fn();
    render(<TodoInput onSubmit={onSubmit} />);
    fireEvent.changeText(screen.getByPlaceholderText('Add a task…'), '   ');
    fireEvent.press(screen.getByText('Add'));
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('uses custom placeholder', () => {
    render(<TodoInput onSubmit={jest.fn()} placeholder="New task" />);
    expect(screen.getByPlaceholderText('New task')).toBeTruthy();
  });
});
