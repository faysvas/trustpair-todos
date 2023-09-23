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

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useState } from 'react';



//import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const LoginForm = () => {
  const [open, setOpen] = useState(false);
      const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
          console.log("Wrong credentials")
        }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
                  <Button id="login" variant="secondary">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign in with email and password</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="w-full">
                    <Input
              id="email"
                          value={email}
                          type="email"
                          placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          <div className="w-full">

                      <Input
              id="email"
                          type="password"
                          placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

          />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full" type="submit" onClick={() => handleAuth()}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
