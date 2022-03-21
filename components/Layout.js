
import Footer from "./Footer";
import Header from "./Header/index";
import NewsletterForm from "./NewsletterForm";
import Banner from "./Header/Banner";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <Banner />
      {children}
      <NewsletterForm />
      <Footer />
    </div>
  );
};

export default Layout;
