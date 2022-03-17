import Footer from './Footer';
import Banner from './Header/Banner';
// import Cart from './Cart/index';
import Header from './Header';
import Contact from './Contact';
import NewsletterForm from './NewsletterForm';

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <Header />
      <Banner />
      { children }
      <NewsletterForm />
      <Footer />
    </div>
   );
}
 
export default Layout;