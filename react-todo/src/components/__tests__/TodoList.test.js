import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle a todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem); 
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem); 
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    const deleteButton = todoItem.nextSibling;
    fireEvent.click(deleteButton); 
    expect(todoItem).not.toBeInTheDocument();
  });
});
