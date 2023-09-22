'use client';
import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa';
import { deleteTodo, toggleTodoStatus } from '../api/todo';
import { Card, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
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
  const handleTodoDelete = async (id) => {
    if (confirm('Are you sure you wanna delete this todo?')) {
      deleteTodo(id);
      toast({ title: 'Todo deleted successfully', status: 'success' });
    }
  };
  const handleToggle = async (id, status) => {
    const newStatus = status == 'completed' ? 'pending' : 'completed';
    await toggleTodoStatus({ docId: id, status: newStatus });
    toast({
      title: `Todo marked ${newStatus}`,
      status: newStatus == 'completed' ? 'success' : 'warning',
    });
  };
  return (
    <div>
      <div className="flex flex-col">
        {todos &&
          todos.map((todo) => (
            <Card key={todo.id}>
              <CardHeader>
                {todo.title}{' '}
                <Badge
                  color="red.500"
                  bg="inherit"
                  transition={'0.2s'}
                  _hover={{
                    bg: 'inherit',
                    transform: 'scale(1.2)',
                  }}
                  float="right"
                  size="xs"
                  onClick={() => handleTodoDelete(todo.id)}
                >
                  <FaTrash />
                </Badge>
                <Badge
                  color={todo.status == 'pending' ? 'gray.500' : 'green.500'}
                  bg="inherit"
                  transition={'0.2s'}
                  _hover={{
                    bg: 'inherit',
                    transform: 'scale(1.2)',
                  }}
                  float="right"
                  size="xs"
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
          ))}
      </div>
    </div>
  );
};
export default TodoList;
