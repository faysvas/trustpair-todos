import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Pencil } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { updateTodo } from '../api/todo';
import { useState } from 'react';

interface UpdateTodoProps {
  todo: TodoType;
}

const UpdateTodo: React.FC<UpdateTodoProps> = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [assignee, setAssignee] = useState(todo.assignee);
  const [open, setOpen] = useState(false);

  const handleTodoUpdate = async () => {
    await updateTodo({ docId: todo.id, title, assignee });
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="update-todo-button" variant="secondary" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
          <DialogDescription>
            Update your Todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Todo
            </Label>
            <Input
              id="todo"
              defaultValue={todo.title}
              className="col-span-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Assignee
            </Label>
            <Input
              id="assignee"
              defaultValue={todo.assignee}
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => handleTodoUpdate()}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodo;
