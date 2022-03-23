const OrderHistory = () => {
  return (
    <table className="order-history-table">
      <thead>
        <tr>
          <th className="order-num-col">Order Number</th>
          <th className="order-items-col">Order Items</th>
          <th className="order-total-col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="">14</a>
          </td>
          <td>
            <ul>
              <li>D&G</li>
              <li>YSL</li>
            </ul>
          </td>
          <td>$280</td>
        </tr>
        <tr>
          <td>
            <a href="">17</a>
          </td>
          <td>
            <ul>
              <li>Gucci</li>
              <li>Chanel</li>
              <li>Armani</li>
            </ul>
          </td>
          <td>$280</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderHistory;
