import "../styles/globals.css";
import "../styles/main.scss";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/Auth";
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
