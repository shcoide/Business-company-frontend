
import './staffing.css';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React,{useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../home/home.css';
import Footer from '../../../components/footer/footer';
const Staffing = () => {
  const reveal = () => {
    const animate = document.querySelectorAll(".animate-about");

    for (let i = 0; i < animate.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = animate[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        // Delay the addition of the class by a small amount
        setTimeout(() => {
          animate[i].classList.add("active-about");
        }, 50);
      }
      // else {
      //   animate[i].classList.remove("active");
      // }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Add event listener when the component mounts
    window.addEventListener("scroll", reveal);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="home-page">
      
      <div className="staffing-image-text " id='staffing-top'>
        <div className="landing-written">
            <div className="landing-logo"></div>
            <div className='landing-written-text'>
              <h2 className='animate-about fade-up-1 active-about'>Staffing Solutions</h2>
              <h3 className='animate-about fade-up-2 active-about'>We and our subordinates provide Staffing services to our clients all over the world. We are one of the trusted company in this sector.</h3>
              </div>   
        </div>
      </div>
      <div className="the-differentiator">
        <h2 className="titles-of-all animate-about fade-up-3">Why we are Unique</h2>
        <div className="different-boxes">
          <div className="diff-box more-height animate-about fade-up-10">
            <h2>Agile Delivery and Governance</h2>
            <img src="../staffing/qt=q_81.webp" alt="" srcset="" />
            <p>Programme manager, Delivery manager, Scrum master, Product owner, Project manager, Business/Risk analyst </p>
          </div>
          <div className="diff-box more-height animate-about fade-up-11">
            <h2>HR and Staffing Solutions</h2>
            <img src="../staffing/img-1.jpeg" alt="" srcset="" />
            <p>NIAD Australia and it's subsidiaries organisations provide permanent as well as contract staff to Many government as well as Fortune 500 companies in Australia, UAE and India. We manage the  Recruitment, Screening and skills verification of applicants, and deploy suitable candidates for your IT Projects.  We consistently achieve results quickly, securing top IT talent for our clients across all IT roles & disciplines. </p>
          </div>
          <div className="diff-box more-height animate-about fade-up-10">
            <h2>IT Hardware and Application Services</h2>
            <img src="../staffing/img-2.jpeg" alt="" srcset="" />
            <p>NIAD Australia provides  Data Centre, Cloud,  Network, Security and End Point Solutions.  Whatever be your business or area of specialisation, we can provide you with workstations, laptops and PCs in partnership with HP, Lenovo, Dell and Microsoft. In India, we are a leading provider of data centre solutions with comprehensive portfolio of network, server and storage connectivity. </p>
          </div>
          <div className="diff-box more-height animate-about fade-up-11">
            <h2>Managed Services</h2>
            <img src="../staffing/img-3.jpeg" alt="" srcset="" />
            <p>Globally, businesses are shifting toward managed services. 
To maintain organizational flexibility as well as entrepreneurial speed and agility, we at NIAD can work with you to discover, evaluate, and quantify all the critical indicators. With the aid of our managed services, you may achieve operational excellence while keeping an eye on your operating, infrastructure, and capital expenses.</p>
          </div>
        </div>
      </div>
      <div className="the-differentiator">
        <h2 className="titles-of-all animate-about fade-up-3 ">OUR ICT AND HR DOMAIN EXPERTISE</h2>
        <div className="different-boxes">
          <div className="diff-box animate-about fade-up-10 ">
            <h2>ICT Systems Integration</h2>
            <img src="../staffing/img-4.jpeg" alt="" srcset="" />
            <p>Developers, Solution Architects, System Integration Services, </p>
          </div>
          <div className="diff-box more-height animate-about fade-up-11" >
            <h2>Cyber Security</h2>
            <img src="../staffing/img-5.jpeg" alt="" srcset="" />
            <p>Cyber security specialist, CISO, Security architect, Testers, Forensic Investigator

Security and Risk Analyst</p>
          </div>
          <div className="diff-box more-height animate-about fade-up-10">
            <h2>Data Science</h2>
            <img src="../staffing/img-6.jpeg" alt="" srcset="" />
            <p>Data scientist, Data analyst, Business Intelligence Analyst, Data Engineer/Architect, Actuarial Analyst</p>
          </div>
          <div className="diff-box more-height animate-about fade-up-11">
            <h2>Change and Transformation</h2>
            <img src="../staffing/img-8.jpeg" alt="" srcset="" />
            <p>Organisational Change Analyst, Organisational Change Manager, Transformation Specialist, Business Process Modeller</p>
          </div>
          <div className="diff-box more-height animate-about fade-up-10" >
            <h2>Software Engineering & Development</h2>
            <img src="../staffing/img-9.jpeg" alt="" srcset="" />
            <p>Software Developer, Technical Lead, DevOps Engineer, Cloud Engineer, Quality Assurance Tester, Solution Architect</p>
          </div>
          <div className="diff-box more-height animate-about fade-up-11">
            <h2>User Research and Design</h2>
            <img src="../staffing/img-10.jpeg" alt="" srcset="" />
            <p>User researcher, Service designer, Service Modeler, Interaction designer, Accessibility specialist, inclusive designer</p>
          </div>
          <div className="diff-box more-height animate-about fade-up-10" >
            <h2>Content and Publishing</h2>
            <img src="../staffing/img-11.jpeg" alt="" srcset="" />
            <p>Content designer, Technical writer, Multimedia specialist (photography, illustration, animation and video)</p>
          </div>
          <div className="diff-box more-height animate-about fade-up-11">
            <h2>Emerging Technologys</h2>
            <img src="../staffing/img-12.jpeg" alt="" srcset="" />
            <p>Blockchain, Machine Learning, Artificial Intelligence, Robotic Process Automation. Fintech</p>
          </div>
        </div>
      </div>
      <div className="homepage-services" id='homepage-services'>
        <h2 className='titles-of-all'>Our Services</h2>
        <div className="services-all">
          <h2 className='landing-buttons animate-about fade-up-4'>Variety Solution for Staffing, Technology & Digital Security</h2>
          <div className="indi-servi animate-about fade-up-9">
          <Link to="/services/staffing" ></Link>
          <ScrollLink
        to="staffing-top" // Specify the target element's id
        spy={true}
        smooth={true}
        duration={800} 
        className="scroll"
      >
        Staffing Services
      </ScrollLink>
          </div>
          <div className="indi-servi animate-about fade-up-9">
            <Link to="/">Analytics</Link>
          </div>
          <div className="indi-servi animate-about fade-up-9">
            <Link to="/">Managed IT Services</Link>
          </div>
          <Outlet/>
          <div className="indi-servi"></div>
          <div className="indi-servi"></div>
          <div className="indi-servi"></div>
          <div className="indi-servi"></div>
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
export default Staffing;