import Footer from './Footer';
import Header from './Header/index';
import Cart from './Cart/index';

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <Header />
      <Cart />
        { children }
      <Footer />
    </div>
   );
}
 
export default Layout;