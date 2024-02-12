import React,{useState,useEffect} from "react";
import "./navbar.css";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
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
    document.body.style.overflow = 'auto';
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
  <nav className="navbar" id="nav-top" style={{
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
          {/* <ScrollLink
        to="homepage-about" // Specify the target element's id
        spy={true}
        smooth={true}
        duration={800} 
        onClick={closeMobileMenu}
        className="scroll"
      >
         About 
      </ScrollLink> */}
          {/* <a href="#">About</a> */}
        </li>
        <li className="dropdown">
        <ScrollLink
        to="homepage-services" // Specify the target element's id
        spy={true}
        smooth={true}
        duration={800} 
        className="scroll"
        onClick={closeMobileMenu}
      >
        Services
      </ScrollLink>
        <div className="dropdown-content">
            <Link to="services/staffing" onClick={closeMobileMenu}>Staffing Services</Link>

          </div>
        </li>
        <li>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
        </li>
        {/* <li>
          <Link to="/register" onClick={closeMobileMenu}>Register Here</Link>
          <ScrollLink
        to="/contact#enquiry" 
        spy={true}
        smooth={true}
        duration={800} 
        className="scroll"
      >
        Enquiry Here 
      </ScrollLink>
        </li> */}
      </ul>
      {/* <h1 className="logo-navbar">Navbar</h1> */}
    </div>
  </nav>
    <Outlet/>
</>
  );
};

export default Navbar;
