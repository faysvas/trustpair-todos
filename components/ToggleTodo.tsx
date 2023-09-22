import React from 'react';

import { toggleTodoStatus } from '../api/todo';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
const ToggleTodo = ({ todo }) => {
  const handleToggle = async (id, status) => {
    const newStatus = status == 'completed' ? 'pending' : 'completed';
    await toggleTodoStatus({ docId: id, status: newStatus });
  };
  return (
    <Button
      variant={todo.status == 'pending' ? 'outline' : ''}
      size="icon"
      onClick={() => handleToggle(todo.id, todo.status)}
      className="rounded-full"
    >
      <Check className="h-4 w-4" />
    </Button>
  );
};

export default ToggleTodo;
