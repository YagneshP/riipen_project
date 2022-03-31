import "../styles/globals.css";
import "../styles/main.scss";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/Auth";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { CartProvider } from "../context/Cart";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "../lib/stripe";

const stripePromise = getStripe();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <AuthProvider>
          <CartProvider>
            <Layout>
              <Elements stripe={stripePromise}>
                <Component {...pageProps} />
              </Elements>
            </Layout>
          </CartProvider>
        </AuthProvider>
      </div>
    </Provider>
  );
}

export default MyApp;
