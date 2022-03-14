import Footer from './Footer';
import Header from './Header';
import Banner from './Header/Banner';
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