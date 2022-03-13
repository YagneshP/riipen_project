import Footer from './Footer';
import Header from './Header';
import About from '../pages/about';
import WriteToCloudFirestore from './firebase/write';
import ProductsContent from './products-content';

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <ProductsContent />
      {/* <WriteToCloudFirestore /> */}
      {/* <Header />  */}
      {/* <About /> */}
        {/* { children } */}
       {/* <Footer /> */}
    </div>
   );
}
 
export default Layout;