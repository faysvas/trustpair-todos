'use client';
import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';

import Todo from './Todo';
const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const { user } = useAuth();

  const refreshData = () => {
    if (!user) {
      setTodos([]);
      return;
    }
    const q = query(collection(db, 'todo'), where('user', '==', user.uid));
    onSnapshot(q, (querySnapshot) => {
      let ar = [];
      querySnapshot.docs.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setTodos(ar);
    });
  };
  useEffect(() => {
    refreshData();
  }, [user]);

  return (
    <div className="flex flex-col gap-2">
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};
export default TodoList;
