import app from "./firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

export const createUser = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
