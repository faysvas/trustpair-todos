'use client';
import React from 'react';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle, FaMoon, FaSun } from 'react-icons/fa';
import { auth } from '../firebase';
import useAuth from '../hooks/useAuth';
import { Button } from './ui/button';
import Link from '@/node_modules/next/link';
const Auth = () => {
  const { isLoggedIn, user } = useAuth();
  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      {isLoggedIn && (
        <>
          <div className="green-500">{user.email}</div>
          <Button color="red.500" onClick={() => auth.signOut()}>
            Logout
          </Button>
        </>
      )}
      {!isLoggedIn && (
        <Button leftIcon={<FaGoogle />} onClick={() => handleAuth()}>
          Login with Google
        </Button>
      )}
    </div>
  );
};
export default Auth;
