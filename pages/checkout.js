import Checkout from "../components/Checkout";
import ElementForm from "../components/PaymentCheckout/ElementForm";

const Layout = () => {
  return (
    <div className='content'>
      <Checkout />
      {/* <ElementForm stripe={stripePromise} /> */}
    </div>
  );
};

export default Layout;
