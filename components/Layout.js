import Footer from './Footer';
import Header from './Header';
import About from '../pages/about';
import WriteToCloudFirestore from './firebase/write';

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <WriteToCloudFirestore />
      {/* <Header /> */}
      {/* <About /> */}
        {/* { children } */}
      {/* <Footer /> */}
    </div>
   );
}
 
export default Layout;