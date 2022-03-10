import Footer from './Footer';
import Header from './Header';
import About from '../pages/about';

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <Header />
      {/* <About /> */}
        { children }
      <Footer />
    </div>
   );
}
 
export default Layout;