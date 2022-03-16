import { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  updateProfile,
  updateCurrentUser,
} from "firebase/auth";

import formatAuthUser from "../../utils/formatAuthUser";
import app from "../../lib/firebase";
import { createUser, getUser } from "../../lib/db";
import { useRouter } from "next/router";

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth(app); // getting Auth service from firebase
  // connectAuthEmulator(auth, "http://localhost:9099"); // authSimulator runs locally

  const authStateChanged = async (authUser) => {
    if (authUser) {
      setLoading(true);
      console.log("AuthUser", authUser);
      var formattedUser = formatAuthUser(authUser);
      await createUser(formattedUser.uid, formattedUser);
      console.log("formattedUser", formattedUser);
      setUser(formattedUser);
      setLoading(false);
      return formattedUser;
    } else {
      setUser(null);
      setLoading(false);
      return;
    }
  };

  const signUp = async (userInfo) => {
    const { email, password, firstName, lastName } = userInfo;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //update userprofile
      await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });

      console.log("user", userCredential.user);
      await authStateChanged(user);
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
      console.log("userCredential", userCredential.user);
      const user = auth.currentUser;
      console.log("onlyUser", user);
      console.log("provider", userCredential.user.providerData);
      // await authStateChanged(userCredential);
    } catch (error) {
      console.log("Error while signIn : ", error);
    }
  };
  const signingOut = async () => {
    return signOut(auth)
      .then(async () => {
        console.log("signout User", auth.currentUser);
        await authStateChanged(false);
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
