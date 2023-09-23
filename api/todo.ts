import { db } from '../firebase';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { AddTodoType, TodoType } from '@/common/types/types';

interface RandomUserName {
  name: {
    first: string;
    last: string;
  };
}

const getRandomUser = async (): Promise<string> => {
  try {
    const response = await fetch('https://randomuser.me/api/?inc=name');
    const data: { results: RandomUserName[] } = await response.json();
    const user = data.results[0];

    return `${user.name.first} ${user.name.last}`;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const addTodo = async ({ userId, title, status }: AddTodoType): Promise<void> => {
  try {
    const assignee = await getRandomUser();
    await addDoc(collection(db, 'todo'), {
      user: userId,
      title,
      status,
      createdAt: new Date().getTime(),
      assignee,
    });
  } catch (err) {
    console.log(err);
  }
};

const toggleTodoStatus = async ({ docId, status }: { docId: string; status: string }): Promise<void> => {
  try {
    const todoRef = doc(db, 'todo', docId);
    await updateDoc(todoRef, {
      status,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateTodo = async ({ docId, title, assignee }: { docId: string; title: string; assignee: string }): Promise<void> => {
  try {
    const todoRef = doc(db, 'todo', docId);
    await updateDoc(todoRef, {
      title,
      assignee,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteTodo = async (docId: string): Promise<void> => {
  try {
    const todoRef = doc(db, 'todo', docId);
    await deleteDoc(todoRef);
  } catch (err) {
    console.log(err);
  }
};

export { addTodo, toggleTodoStatus, deleteTodo, updateTodo };
