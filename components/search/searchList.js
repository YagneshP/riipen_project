/* eslint-disable */

import ProductItem from '../Product/ProductItem';

const List = (props) => {
	
	const {products} = props.products;
	const filteredData = products.filter((el) => {
		//if no input the return the original
		if (props.input === '') {
				return el.id;
		}
		//return the item which contains the user input
		else {
			return el.name.toLowerCase().includes(props.input);
			//other search options
			// return ( el.brand.toLowerCase().includes(props.input)||
			// 					el.name.toLowerCase().includes(props.input)||
			// 					el.category.toLowerCase()===props.input);
		}
})

	return (
		<>
			<section className="products">
				<h1> Fragrances</h1>
				<div className="new-arrival-products">

					{filteredData.map(product => (
						<ProductItem
						key={product.id}
						id={product.id}
						permalink={product.permalink}
						price={product.price.formatted_with_symbol}
						currentPrice={product.price.formatted_with_symbol}
						Image={product.image.url}
						name={product.name}
						brand={product.name}
					/>
					))}
				</div>
			</section>
		</>
	);
};

export default List;
