import app from "./firebase";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(app);

export const createUser = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", "uid"), { uid, ...data }, { merge: true });
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
