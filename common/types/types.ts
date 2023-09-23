type StatusType: 'completed' | 'pending';

interface TodoType {
  id: string;
  userId: string;
  title: string;
  status: StatusType
  createdAt: number;
  assignee: string;
}


export {TodoType, StatusType}