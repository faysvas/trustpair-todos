'use client';
import React from 'react';

import useAuth from '../hooks/useAuth';
import { addTodo } from '../api/todo';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select } from './ui/select';
import { Button } from './ui/button';
const AddTodo = () => {
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('pending');
  const [isLoading, setIsLoading] = React.useState(false);

  const { isLoggedIn, user } = useAuth();
  const handleTodoCreate = async () => {
    if (!isLoggedIn) {
      console.log('not logged in');
    }
    setIsLoading(true);
    const todo = {
      title,
      status,
      userId: user.uid,
    };
    console.log('todo ', todo);
    await addTodo(todo);
    setIsLoading(false);
    setTitle('');
    setStatus('pending');
  };

  return (
    <div>
      <div className="flex w-full items-center space-x-2">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button
          className="w-28"
          onClick={() => handleTodoCreate()}
          disabled={title.length < 1 || isLoading}
        >
          Add Todo
        </Button>
      </div>
    </div>
  );
};
export default AddTodo;
