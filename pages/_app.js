import '../styles/globals.css';
import '../styles/main.scss';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
    </Provider>
  )
}

export default MyApp;
