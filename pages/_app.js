import "../styles/globals.css";
import "../styles/main.scss";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/Auth";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { CartProvider } from "../context/Cart";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <AuthProvider>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </AuthProvider>
      </div>
    </Provider>
  );
}

export default MyApp;
