import Footer from './Footer';
import Header from './Header';
import Cart from './Cart';

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