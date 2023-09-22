'use client';
import React from 'react';

import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

import DeleteTodo from './DeleteTodo';
import ToggleTodo from './ToggleTodo';
import UpdateTodo from './UpdateTodo';
const Todo = ({ todo }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ToggleTodo todo={todo} />
            <div className="flex flex-col">
              <CardTitle
                className={todo.status == 'completed' ? 'line-through' : ''}
              >
                {todo.title}
              </CardTitle>
              <CardDescription>Assigned to {todo.assignee}</CardDescription>
            </div>
          </div>
          <div className="flex gap-4">
            <UpdateTodo todo={todo} />
            <DeleteTodo todo={todo} />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Todo;
