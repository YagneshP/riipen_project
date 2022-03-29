<<<<<<< HEAD
import Checkout from "../components/Checkout/index";
=======
import Checkout from "../components/Checkout";
import ElementForm from "../components/PaymentCheckout/ElementForm";
>>>>>>> origin/feature/stripe_checkout

const Layout = () => {
  return (
    <div className='content'>
      <Checkout />
      {/* <ElementForm stripe={stripePromise} /> */}
    </div>
  );
};

export default Layout;
