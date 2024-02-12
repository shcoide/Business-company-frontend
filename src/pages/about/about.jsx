import React,{useEffect} from 'react';
// import {Link,Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../home/home.css';
import './about.css';
import Footer from '../../components/footer/footer';
const About = () => {
  const reveal = () => {
    const animate = document.querySelectorAll(".animate-about");

    for (let i = 0; i < animate.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = animate[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        animate[i].classList.add("active-about");
      }
      // else {
      //   animate[i].classList.remove("active");
      // }
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("scroll", reveal);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="home-page">
      
      <div className="about-image-text filter">
        <div className="landing-written">
            <div className="landing-logo"></div>
            <div className='landing-written-text'>
              <h2 className='animate-about fade-up-1 active-about'>Staffing Solutions, Technology Transformation & Digital Security</h2>
              <h3 className='animate-about fade-up-2 active-about'>Your Trusted Partner in Staffing Solutions, Technology Transformation & Digital Security</h3>
              </div>    
        </div>
      </div>
      <div className="homepage-about" id='homepage-about'>
        <h2 className=' animate-about fade-up-4 '>Who we are</h2>
        <div className="home-about-info left-align">
          <div className="home-info-text landing-buttons animate-about fade-up-5 more-width">
            <h1>We are More than just a company</h1>
            <p>At the forefront of industry leadership, NIAD Australia is a driving force committed to meeting the diverse needs of clients in Staffing & Resourcing Solutions, Technology Transformation & Operations, and Digital Security (Cybersecurity) for both Government and esteemed Blue Chip Companies. Our thriving business is anchored in enduring partnerships cultivated over time. Renowned for our unwavering dedication to delivering transparent and quality-driven services, we have emerged as a trusted and preferred supplier for a multitude of clients.</p>
          </div>

        </div>
        <div className="more-info">
          <div className="more-info-img animate-about fade-up-7"></div>
          <div className="more-info-stats">
            <div className="info-stats-boxes animate-about fade-up-8">
              <div className="stat-box" id='border-box'>
                <h1>12+</h1>
                <h3>Years of experience in  Staffing Solutions</h3>
              </div>
              <div className="stat-box">
                <h1>50+</h1>
                <h3>Clients are all over the world</h3>
              </div>
              <div className="stat-box"></div>
            </div>
          </div>
        </div>
        <div className="home-about-info left-align">
          <div className="home-info-text landing-buttons animate-about fade-up-5">
            <h1>More on us</h1>
            <p>NIAD Australia stands as a premier Australian IT Solutions and Staffing Company, specializing in providing top-tier IT staffing solutions to Government and Blue Chip Companies. Our commitment to excellence extends beyond borders, as we cater to the staffing needs of our Australian clients in India, thus expanding our expertise and reach. Our comprehensive suite of services encompasses temporary staffing, contract-to-hire arrangements, and permanent placements, addressing the diverse needs of Indian companies undertaking various projects. Central to our success is the cultivation of enduring relationships, underpinned by our reputation for honesty and quality service delivery. This dedication has positioned us as the preferred supplier for numerous clients, laying the foundation for our future growth. Our trajectory is defined by a commitment to maintaining our trusted reputation, buoyed by a team of highly skilled and dedicated professionals.</p>
          </div>
        </div>
        <div className="home-about-info left-align">
          <div className="home-info-text landing-buttons animate-about fade-up-5">
            <h1>Our Commitment</h1>
            <p>NIAD Australia is not just responsible to its clients and employees, but our moral and ethical responsibilities extend  to the local community, our country, environment and towards a sustainable planet at large. We believe that we  are compliant with all the relevant regulations which is also evident from our large pool of clients who are satisfied  with our commitment of compliance with relevant regulations related to ethical employment practices, workplace  health & safety as well as integrity and safety of data handling. Our business processes are designed to have minimal  impact on the environment. We undergo periodic internal audit from regulatory compliance perspective. </p>
          </div>
        </div>
        <div className="home-about-info left-align">
          <div className="home-info-text landing-buttons animate-about fade-up-5">
            <h1>Services Guaranteed</h1>
            <p>The world of technology can be fast-paced and scary. That's why our goal is to provide an experience that is tailored to your company's needs. No matter the budget, we pride ourselves on providing professional customer service. We guarantee you will be satisfied with our work.  </p>
          </div>
        </div>
      </div>
      <div className="catchy-register">
        <h1 className='animate-about fade-up-9'>HR Solutions for Your Business <br />| NIAD Australia Pty Ltd.</h1>
        <h4 className='animate-about fade-up-9'>At NIAD, we offer a comprehensive suite of services, including people, and technology to meet your evolving workforce needs. We help in navigating talent challenges, providing tailored solutions for single or multiple roles across various locations. Achieve your goals with us today and in the future.</h4>
        <button type="button" className='animate-about fade-up-9'>REGISTER YOUR VACANCY</button>
      </div>
      <Footer/>
    </div>
  )
}
export default About;