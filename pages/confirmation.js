import { useContext, useEffect,useState } from "react";

export default function Confirmation(props) {
	const [order, setOrder] = useState();
	useEffect(() => {
		setOrder(localStorage.getItem("order_receipt"));
	}, []);
	console.log("line items", order);
	// let data = JSON.parse(order);
	// console.log("data", data);
	return(
	<>
	<h1>confirmation</h1>
	{/* <p>{order}</p> */}
	
	</>)
}