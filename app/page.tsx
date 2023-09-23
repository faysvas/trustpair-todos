'use client';
import useAuth from '@/hooks/useAuth';
import AddTodo from '../components/AddTodo';

import TodoList from '../components/TodoList';
import RootLayout from './layout';
export default function Home() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col gap-8">
      {user ? (
        <>
          <AddTodo />
          <TodoList />
        </>
      ) : (
        <div className="text-center">Please log in to add Todos</div>
      )}
    </div>
  );
}
