import Footer from './Footer';
import Header from './Header/index';
// import Cart from './Cart/index';
// import Header from './Header';
import Contact from './Contact'

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <Header />
      {/* <Cart /> */}
        { children }
      <Footer />
    </div>
   );
}
 
export default Layout;