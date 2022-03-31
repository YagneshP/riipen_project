import ProductItem from "../Product/ProductItem";

const List = (props) => {
  const filteredData = props.products?.filter((el) => {
    if (props.input === "") {
      return el.id;
    } else {
      return el.name.toLowerCase().includes(props.input);
      //other search options
      // return ( el.brand.toLowerCase().includes(props.input)||
      // 					el.category.toLowerCase()===props.input);
    }
  });

  return (
    <>
      <section className='products'>
        <h1> Fragrances</h1>
        <hr />
        <div className='new-arrival-products'>
          {filteredData.map((product) => (
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
