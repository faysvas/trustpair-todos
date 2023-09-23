import React from 'react';

import useAuth from '../hooks/useAuth';
import { addTodo } from '../api/todo';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { AddTodoType } from '@/common/types/types';
const AddTodo = () => {
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('pending');
  const [isLoading, setIsLoading] = React.useState(false);

  const { user } = useAuth();
  const handleTodoCreate = async () => {
    setIsLoading(true);
    const todo = {
      title,
      status,
      userId: user?.uid,
    } as AddTodoType;

    await addTodo(todo);
    setIsLoading(false);
    setTitle('');
    setStatus('pending');
  };

  return (
    <div className="add-todo flex w-full items-center space-x-2">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button
        id="add-todo"
        className="w-28"
        onClick={() => handleTodoCreate()}
        disabled={title.length < 1 || isLoading}
      >
        Add Todo
      </Button>
    </div>
  );
};
export default AddTodo;
