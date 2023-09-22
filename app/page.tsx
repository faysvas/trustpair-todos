import AddTodo from '../components/AddTodo';
import Auth from '../components/Auth';
import TodoList from '../components/TodoList';
import RootLayout from './layout';
export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <AddTodo />
      <TodoList />
    </div>
  );
}
