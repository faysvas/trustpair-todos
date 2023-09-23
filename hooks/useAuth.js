import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebase';
const useAuth = () => {
  const [user, setUser] = useState<User>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user && user.uid ? true : false);
      setUser(user);
    });
  });
  return { user, isLoggedIn };
};
export default useAuth;
