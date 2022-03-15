import { useState, useEffect } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

const Header = () => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 797) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 797) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <header className="header">
      <Logo />
      {isDesktop ? <Nav /> : <MobileMenu />}
    </header>
  );
};

export default Header;
