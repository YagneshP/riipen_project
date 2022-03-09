import Footer from './Footer';
import Header from './Header';
import Banner from './Header/Banner';

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <Header />
      <Banner />
        { children }
      <Footer />
    </div>
   );
}
 
export default Layout;