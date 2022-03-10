import '../styles/globals.css';
import '../styles/main.scss';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
