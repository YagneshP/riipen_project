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
      <CartProvider>
        <div className='wrapper'>
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </div>
      </CartProvider>
    </Provider>
  );
}

export default MyApp;
