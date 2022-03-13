import Footer from './Footer';
import Header from './Header';
import Contact from './Contact'

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <Header />
      
        { children }
      <Footer />
    </div>
   );
}
 
export default Layout;