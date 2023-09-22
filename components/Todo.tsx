'use client';
import React, { useEffect } from 'react';

import { FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa';
import { deleteTodo, toggleTodoStatus } from '../api/todo';
import { Card, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
const Todo = ({ todo }) => {
  const handleTodoDelete = async (id) => {
    if (confirm('Are you sure you wanna delete this todo?')) {
      deleteTodo(id);
      //  toast({ title: 'Todo deleted successfully', status: 'success' });
    }
  };
  const handleToggle = async (id, status) => {
    const newStatus = status == 'completed' ? 'pending' : 'completed';
    await toggleTodoStatus({ docId: id, status: newStatus });
    // toast({
    //   title: `Todo marked ${newStatus}`,
    //   status: newStatus == 'completed' ? 'success' : 'warning',
    // });
  };
  return (
    <Card>
      <CardHeader>
        {todo.title}{' '}
        <Badge onClick={() => handleTodoDelete(todo.id)}>
          <FaTrash />
        </Badge>
        <Badge
          color={todo.status == 'pending' ? 'gray.500' : 'green.500'}
          onClick={() => handleToggle(todo.id, todo.status)}
        >
          {todo.status == 'pending' ? <FaToggleOff /> : <FaToggleOn />}
        </Badge>
        <Badge
          float="right"
          opacity="0.8"
          bg={todo.status == 'pending' ? 'yellow.500' : 'green.500'}
        >
          {todo.status}
        </Badge>
      </CardHeader>
      <div>{todo.description}</div>
    </Card>
  );
};

export default Todo;
