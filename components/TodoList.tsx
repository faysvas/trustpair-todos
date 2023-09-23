'use client';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';

import Todo from './Todo';
import { TodoType} from '@/common/types/types';
const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { user } = useAuth();

  const refreshData = () => {
    const q = query(collection(db, 'todo'), where('user', '==', user?.uid));
    onSnapshot(q, (querySnapshot:any) => {
      let arr: TodoType[] = [];
      querySnapshot.docs.forEach((doc:any) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      setTodos(arr);
    });
  };
  useEffect(() => {
    if (user) {
  refreshData();
    }

  }, [user]);

  return (
    <div id="todolist" className="flex flex-col gap-2">
      {todos && todos.sort((a, b) => b.status.localeCompare(a.status)).map((todo: TodoType) => <Todo key={todo.id} todo={todo} />)}

    </div>
  );
};
export default TodoList;
