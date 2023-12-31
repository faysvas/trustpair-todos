import React from 'react';

import { deleteTodo } from '../api/todo';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TodoType } from '@/common/types/types';
interface DeleteTodoProps {
  todo: TodoType;
}

const DeleteTodo: React.FC<DeleteTodoProps> = ({ todo }) => {
  const handleTodoDelete = async (id: string) => {
    deleteTodo(id);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="delete-todo-button"
          variant="destructive"
          size="icon"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this todo?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleTodoDelete(todo.id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTodo;
