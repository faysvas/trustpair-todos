'use client';
import React, { useState } from 'react';

//import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import useAuth from '../hooks/useAuth';
import { Button } from './ui/button';
import { Input } from './ui/input';
import LoginForm from './LoginForm';

const Auth = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleAuth = async () => {
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential?.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
    //    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      console.log('Wrong credentials');
    }
  };

  return (
    <div>
      {user && (
        <div className="flex gap-2 items-center">
          <div id="user-email" className="text-white">
            {user?.email}
          </div>
          <Button
            id="logout"
            variant="secondary"
            onClick={() => auth.signOut()}
          >
            Logout
          </Button>
        </div>
      )}

      {!user && (
        // <>

        //           <Button id="login" variant="secondary" onClick={() => handleAuth()}>
        //   Login
        // </Button>
        // </>
        <LoginForm />
      )}
    </div>
  );
};
export default Auth;
