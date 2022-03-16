import app from "./firebase";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(app);

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

export const createUser = async (uid, data) => {
  console.log("data before add", data);
  try {
    await setDoc(doc(db, "users", uid), { uid, ...data }, { merge: true });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getUser = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    console.log("docerf", docRef);
    const user = await getDoc(docRef);

    console.log("User", user.data());
    return user;
  } catch (e) {
    console.log("Error while getting user", e);
  }
};
