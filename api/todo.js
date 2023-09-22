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
    const response = await fetch('https://randomuser.me/api/?inc=name,email');
    const data = await response.json();
    const user = data.results[0];
    console.log('user ', user);
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const addTodo = async ({ title, description, status }) => {
  try {
    // Get a random user
    const assignee = await getRandomUser();

    // Create a new todo with assignee
    await addDoc(collection(db, 'todo'), {
      title: title,
      description: description,
      status: status,
      createdAt: new Date().getTime(),
      assignee: assignee,
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

const updateTodo = async ({ docId, title, description }) => {
  try {
    const todoRef = doc(db, 'todo', docId);
    await updateDoc(todoRef, {
      title,
      description,
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
export { addTodo, toggleTodoStatus, deleteTodo };
