// export async function getServerSideProps({ query }) {

	import { useState, useEffect } from "react";
	// import axios from "axios";
	// import { useRouter } from "next/router";
	// import ProductItem from '../products-content/ProductItem';

	// const Product = () => {
	// const [data, setData] = useState([]);
	// const router = useRouter();
	// // const productId = router.query.productId;
  // const pid = router.query.pid;
	// const id = Number(pid) - 1;
	// console.log("pid,id",pid,id);
	// const url = `http://localhost:3000/api/products/`;
  // useEffect(() => {
  //   axios.get(url)
  //   .then((data) => {
  //     console.log("data",data.data[id]);
  //     setData(data.data[id]);
  //   });
  // }, []);
	// const res = await fetch(`localhost:3000/api/products/${pid}`);
	export async function getServerSideProps({ query }) {
		const pid = query.pid;
		console.log("pid",pid);
		const id = Number(pid) - 1;
  const res = await fetch(`http://localhost:3000/api/product/${pid}`);
  const product = await res.json();
	console.log("products",product[id]);
  return {
    props: {
      product,
    },
  }
}

const Product = ({ product }) => {

	// const[reactData, setReactData] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/products/')
  //   .then(res => res.json())
  //   .then(data => {
  //     setReactData(data);
  //   }).catch((e) => {console.log(e)});
  // }, []);
	return (
    <>
		{/* {product.map((item) => (
          <tr> */}
            <td>{product.name}</td>
            {/* <td>{item.brand}</td>
            <td>{item.id}</td> */}
          {/* </tr>
        ))} */}
		<h1> helllllooo.....</h1>
		{/*         <h2>{data.id}</h2> */}
		{/* <div className="container">
      <div className="image">
			<img src={data.image} alt="product" />
			</div>
			<div className="description">
        <h3>{data.brand}</h3>
        <h4>{data.name}</h4>
				<h4>{data.price}</h4>
				</div>
				</div> */}
				{/* <ProductItem 
              discount={data.discount} 
              key={data.id}
              id={data.id} 
              price={data.price}
              currentPrice={data.currentPrice}
              productImage={data.image} 
              name={data.name}
							brand={data.brand} 
            /> */}
		</>
	)
}





export default Product





