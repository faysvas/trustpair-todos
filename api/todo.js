import { db } from '../firebase';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

const getRandomUser = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?inc=name');
    const data = await response.json();
    const user = data.results[0];

    return `${user.name.first} ${user.name.last}`;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const addTodo = async ({ userId, title, status }) => {
  try {
    // Get a random user
    const assignee = await getRandomUser();
    console.log('in add ');
    // Create a new todo with assignee
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

const toggleTodoStatus = async ({ docId, status }) => {
  try {
    const todoRef = doc(db, 'todo', docId);
    await updateDoc(todoRef, {
      status,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateTodo = async ({ docId, title, assignee }) => {
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

const deleteTodo = async (docId) => {
  try {
    const todoRef = doc(db, 'todo', docId);
    await deleteDoc(todoRef);
  } catch (err) {
    console.log(err);
  }
};
export { addTodo, toggleTodoStatus, deleteTodo, updateTodo };
