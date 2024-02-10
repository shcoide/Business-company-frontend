import React,{useState,useEffect} from "react";
import "./navbar.css";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  const [isNavbarScroll, setNavbarScroll] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the value (200 in this case) based on when you want the navbar to become visible
      if (scrollPosition > 0) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
<>
  <nav className="navbar" style={{
    // backgroundColor: isNavbarScroll ? '#fff' : 'transparent',
    // boxShadow: isNavbarScroll ? ' 0px 5px 10px 0px #aaa' : '0 8px 30px 0 rgba(0,0,0,0)',
  }}>
    <title>Navbar</title>
    <div className="navbar-container containerNav">
      <input type="checkbox" name="" id="" checked={isMobileMenuOpen}
            onChange={handleMobileMenuToggle}/>
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className={`menu-items ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu} >Home</Link>
          {/* <a href="#">Home</a> */}
        </li>
        <li>
          <Link to="/about" onClick={closeMobileMenu}>About us</Link>
          {/* <a href="#">About</a> */}
        </li>
        <li className="dropdown">
          <a href="#" >Services</a>
        {/* <div className="dropdown-content">
            <Link to="services/staffing" onClick={closeMobileMenu}>Staffing Services</Link>
            <Link to="services/permanent-staffing" onClick={closeMobileMenu}>Permanent Staffing</Link>
            <Link to="services/apprenticeship" onClick={closeMobileMenu}>Apprenticeship Services</Link>
            <Link to="services/flexi-staffing" onClick={closeMobileMenu}> Flexi Staffing</Link>
            <Link to="services/manpower" onClick={closeMobileMenu}>Manpower Outsourcing</Link>
            <Link to="services/naps" onClick={closeMobileMenu}>NAPS</Link>
            <Link to="services/nats" onClick={closeMobileMenu}>NATS</Link>
          </div> */}
        </li>
        <li>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
        </li>
        <li>
          <Link to="/register" onClick={closeMobileMenu}>Register Here</Link>
        </li>
      </ul>
      {/* <h1 className="logo-navbar">Navbar</h1> */}
    </div>
  </nav>
    <Outlet/>
</>
  );
};

export default Navbar;
