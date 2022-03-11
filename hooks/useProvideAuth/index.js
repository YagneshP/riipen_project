import { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  connectAuthEmulator,
} from "firebase/auth";

import formatAuthUser from "../../utils/formatAuthUser";
import app from "../../lib/firebase";
import { createUser } from "../../lib/db";
import { useRouter } from "next/router";

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth(app); // getting Auth service from firebase
  // connectAuthEmulator(auth, "http://localhost:9099"); // authSimulator runs locally

  const authStateChanged = async (authState, firstName, lastName) => {
    console.log("heeelllo");
    if (!authState) {
      setUser(null);
      setLoading(false);
      // router.push("/register");
      return;
    }

    setLoading(true);
    console.log("AuthState", authState);
    var formattedUser = formatAuthUser(authState, firstName, lastName);
    console.log("formattedUser", formattedUser);
    await createUser(formattedUser.uid, formattedUser);
    setUser(formattedUser);
    setLoading(false);
  };

  const signUp = async (email, password, firstName, lastName) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User", userCredential.user);
    await authStateChanged(userCredential.user, firstName, lastName);
    return userCredential.user;
  };

  const signIn = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("signIn", userCredential);

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  const signingOut = async () => {
    return signOut(auth)
      .then(() => {
        authStateChanged(false);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // listen for Firebase state change
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);
  return {
    user,
    signIn,
    signingOut,
    loading,
    signUp,
  };
};

export default useProvideAuth;
