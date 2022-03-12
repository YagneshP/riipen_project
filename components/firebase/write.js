import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

import app from './initFirebase'

const WriteToCloudFirestore = () => {
	const db = getFirestore(app);
	const sendData = async () => {	
			try {
				const docRef = await addDoc(collection(db, "products"), {
					id: 4,
					brand: "Versace",
					name: "Bright crystal",
					price: 14.05
				});
				
				console.log("Document written with ID: ", docRef.id);
			} catch (error) {
					console.log(error)
					alert(error)
			}
	}
	const readData = async () => {
	const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
  	console.log(`${doc.id} => ${doc.data().name}`);
});
	}
	return (
			<div style={{ margin: '5px 0' }}>
					<button onClick={sendData}>Send Data To Cloud Firestore</button>
					<button onClick={readData}>Read Data from Cloud Firestore</button>
			</div>
	);
}



export default WriteToCloudFirestore