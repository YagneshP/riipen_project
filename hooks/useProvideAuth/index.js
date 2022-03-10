import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import {} from "firebase";
import { formatAuthUser } from "../../utils/formatAuthUser";
import app from "../../lib/firebase";
const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const authStateChanged = (authState) => {
    if (!authState) {
      setUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setUser(formattedUser);
    setLoading(false);
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("signUp", userCredential);
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signIn = (email, password) =>
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

  const signingOut = () => {
    return signOut(auth)
      .then(() => authStateChanged)
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
