'use client';
import useAuth from '@/hooks/useAuth';
import AddTodo from '../components/AddTodo';

import TodoList from '../components/TodoList';
import RootLayout from './layout';
export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex flex-col gap-8">
      {isLoggedIn ? (
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
