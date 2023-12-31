import React from 'react';

import { toggleTodoStatus } from '../api/todo';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { StatusType, TodoType } from '@/common/types/types';
interface ToggleTodoProps {
  todo: TodoType;
}

const ToggleTodo: React.FC<ToggleTodoProps> = ({ todo }) => {
  const handleToggle = async (id: string, status: StatusType) => {
    const newStatus = status == 'completed' ? 'pending' : 'completed';
    await toggleTodoStatus({ docId: id, status: newStatus });
  };

  return (
    <Button
      // @ts-ignore
      variant={todo.status == 'pending' ? 'outline' : 'default'}
      size="icon"
      onClick={() => handleToggle(todo.id, todo.status)}
      className="rounded-full toggle-todo"
    >
      <Check className="h-4 w-4" />
    </Button>
  );
};

export default ToggleTodo;
