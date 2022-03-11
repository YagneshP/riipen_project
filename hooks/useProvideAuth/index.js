import { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  connectAuthEmulator,
  signInWithEmailAndPassword,
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

  const authStateChanged = async (authUser) => {
    console.log("heeelllo");
    if (!authUser) {
      setUser(null);
      setLoading(false);
      // router.push("/register");
      return;
    }
    console.log("AuthUser", authUser);
    setLoading(true);
    var formattedUser = formatAuthUser(authUser);
    await createUser(formattedUser.uid, formattedUser);
    setUser(formattedUser);
    setLoading(false);
    router.push("/logged_in");
  };

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await authStateChanged(userCredential.user);
    } catch (error) {
      console.log("Error while signUp: ", error);
      // const errorCode = error.code;
      // const errorMessage = error.message;
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      await authStateChanged(userCredential);
    } catch (error) {
      console.log("Error while signIn : ", error);
    }
  };
  const signingOut = async () => {
    return signOut(auth)
      .then(() => {
        authStateChanged(false);
        router.push("/");
      })
      .catch((err) => console.log("Error while signout", err));
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
