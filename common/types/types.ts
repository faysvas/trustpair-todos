type StatusType = 'completed' | 'pending';

interface TodoType {
  id: string;
  userId: string;
  title: string;
  status: StatusType
  createdAt: number;
  assignee: string;
}

interface AddTodoType {
  userId: string;
  title: string;
  status: StatusType
}


export type {TodoType, StatusType, AddTodoType}