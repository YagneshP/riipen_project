import React from "react";

const OrderDetail = ({ line_items, subtotal }) => {
  return (
    <div className='order-detail'>
      {line_items.map((item) => (
        <p key={item.name}>
          {item.name} {item.price.formatted_with_symbol}
        </p>
      ))}
      <p className='all-total'>
        TOTAL COST <span> {subtotal.formatted_with_symbol}</span>
      </p>
    </div>
  );
};

export default OrderDetail;
