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
  const [description, setDescription] = React.useState('');
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
      description,
      status,
      userId: user.uid,
    };
    await addTodo(todo);
    setIsLoading(false);
    setTitle('');
    setDescription('');
    setStatus('pending');
  };

  return (
    <div>
      <div className="flex flex-col">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Placeholder"
            className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
          />
        </div> */}
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option
            value={'pending'}
            style={{ color: 'yellow', fontWeight: 'bold' }}
          >
            Pending ⌛
          </option>
          <option
            value={'completed'}
            style={{ color: 'green', fontWeight: 'bold' }}
          >
            Completed ✅
          </option>
        </Select>
        <Button
          onClick={() => handleTodoCreate()}
          disabled={title.length < 1 || description.length < 1 || isLoading}
        >
          Add
        </Button>
      </div>
    </div>
  );
};
export default AddTodo;
