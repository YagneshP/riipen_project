// Read Products Data from Cloud Firestore

import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import app from './initFirebase'

export default function Product() {
	console.log("app",app);
	const db = getFirestore(app);
	console.log("db",db);
	const readData = async () => {
		const querySnapshot = await getDocs(collection(db, "products"));
			querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data().name}`);
	});
	}
	return(
		<div> <h1> hello </h1>
		<button onClick={readData}>Read Data from Cloud Firestore</button>
		</div>
	)
}