/* eslint-disable */

import useSwr from 'swr';
import ProductItem from '../products-content/ProductItem';
import { ListAltRounded } from '@mui/icons-material';

const fetcher = url => fetch(url).then(res => res.json());

const List = (props) => {
	const { data, error } = useSwr("/api/products",fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

	const filteredData = data.filter((el) => {
		//if no input the return the original
		if (props.input === '') {
				return el;
		}
		//return the item which contains the user input
		else {
			console.log("props",props.input);
			console.log("brand",el.category);
				return ( el.brand.toLowerCase().includes(props.input)||
								el.name.toLowerCase().includes(props.input)||
								el.category.toLowerCase()===props.input);
		}
})

	return (
		<>
			<section className="products">
				<h1> Fragrances</h1>
				<div className="new-arrival-products">

					{filteredData.map(item => (
						<ProductItem
							discount={item.discount}
							key={item.id}
							id={item.id}
							price={item.price}
							currentPrice={item.currentPrice}
							productImage={item.image}
							name={item.name}
							brand={item.brand}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default List