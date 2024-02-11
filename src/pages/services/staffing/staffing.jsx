// import React, { useEffect ,useRef } from 'react';
// import Swiper from 'swiper';
// import 'swiper/css';
import './staffing.css';
// const Staffing = () => {
//   const swiperRef = useRef(null);
//   let autoScrollInterval = null;

//   useEffect(() => {
//     const swiper = new Swiper(".swiper-container", {
//       effect: "coverflow",
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: "auto",
//       coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 2,
//         slideShadows: true
//       },
//       keyboard: {
//         enabled: true
//       },
//       mousewheel: {
//         thresholdDelta: 70
//       },
//       spaceBetween: 60,
//       loop: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//       }
//     });

//     swiperRef.current = swiper;
//     startAutoScroll();

//     swiper.el.addEventListener('mouseenter', stopAutoScroll);
//     swiper.el.addEventListener('mouseleave', startAutoScroll);

//     return () => {
//       swiper.el.removeEventListener('mouseenter', stopAutoScroll);
//       swiper.el.removeEventListener('mouseleave', startAutoScroll);
//       stopAutoScroll();
//       swiper.destroy();
//     };
//   }, []);

//   const startAutoScroll = () => {
//     autoScrollInterval = setInterval(() => {
//       if (swiperRef.current) {
//         swiperRef.current.slideNext();
//       }
//     }, 1200); 
//   };

//   const stopAutoScroll = () => {
//     clearInterval(autoScrollInterval);
//   };

//   const slideLeft = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const slideRight = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   return (
//     <section>
//       <div className="swiper-container">
//         <div className="swiper-wrapper">
//           <div className="swiper-slide swiper-slide--one">
//             <div className="slide-content">
//               <img src="/staffing-images/img1.webp" alt="Staffing Image" />
//               <h2>HR and Staffing Solutions</h2>
//               <p>
//                 NIAD Australia and its subsidiaries organisations provide permanent as well as contract staff to many government as well as Fortune 500 companies in Australia, UAE, and India. We manage the recruitment, screening, and skills verification of applicants and deploy suitable candidates for your IT projects. We consistently achieve results quickly, securing top IT talent for our clients across all IT roles and disciplines.
//               </p>
//             </div>
          
//           </div>
//           <div className="swiper-slide swiper-slide--two">
//             <div className="slide-content">
//               <img src="/staffing-images/img2.webp" alt="Staffing Image" />
//               <h2>IT Hardware and Application Services</h2>
//               <p>
//               NIAD Australia provides  Data Centre, Cloud,  Network, Security and End Point Solutions.  Whatever be your business or area of specialisation, we can provide you with workstations, laptops and PCs in partnership with HP, Lenovo, Dell and Microsoft. In India, we are a leading provider of data centre solutions with comprehensive portfolio of network, server and storage connectivity. 
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--three">
//             <div className="slide-content">
//               <img src="/staffing-images/img3.webp" alt="Staffing Image" />
//               <h2>Managed Services</h2>
//               <p>
//               Globally, businesses are shifting toward managed services. 

// To maintain organizational flexibility as well as entrepreneurial speed and agility, we at NIAD can work with you to discover, evaluate, and quantify all the critical indicators. With the aid of our managed services, you may achieve operational excellence while keeping an eye on your operating, infrastructure, and capital expenses.
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--four">
//             <div className="slide-content">
//               <img src="/staffing-images/img4.webp" alt="Staffing Image" />
//               <h2>Agile delivery and governance
// </h2>
//               <p>
//                 NIAD Australia and its subsidiaries organisations provide Programme manager, Delivery manager, Scrum master, Product owner, Project manager, Business/Risk analyst
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--five">
//             <div className="slide-content">
//               <img src="/staffing-images/img5.webp" alt="Staffing Image" />
//               <h2>ICT systems integration</h2>
//               <p>
//                 NIAD Australia and its subsidiaries organisations provide Developers, Solution Architects, System Integration Services, 
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--Six">
//             <div className="slide-content">
//               <img src="/staffing-images/img6.webp" alt="Staffing Image" />
//               <h2>Cyber security</h2>
//               <p>
//                 NIAD Australia and its subsidiaries organisations provide Cyber security specialist, CISO, Security architect, Testers, Forensic Investigator Security and Risk Analyst
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--Seven">
//             <div className="slide-content">
//               <img src="/staffing-images/img7.webp" alt="Staffing Image" />
//               <h2>Data science</h2>
//               <p>
//               NIAD Australia and its subsidiaries organisations provide Data scientist, Data analyst, Business Intelligence analyst, Data engineer/architect, Actuarial Analyst
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--Eight">
//             <div className="slide-content">
//               <img src="/staffing-images/img8.webp" alt="Staffing Image" />
//               <h2>change and transformation</h2>
//               <p>
//                 NIAD Australia and its subsidiaries organisations provide Organisational change Analyst, Organisational change Manager, Transformation specialist, Business Process Modeller
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--Nine">
//             <div className="slide-content">
//               <img src="/staffing-images/img9.webp" alt="Staffing Image" />
//               <h2>Software eng. & development</h2>
//               <p>
//               NIAD Australia and its subsidiaries organisations provide Software Developer, Technical lead, DevOps engineer, Cloud Engineer, Quality assurance tester, Solution Architect
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--Tenth">
//             <div className="slide-content">
//               <img src="/staffing-images/img10.webp" alt="Staffing Image" />
//               <h2>Emerging Technology</h2>
//               <p>
//               NIAD Australia and its subsidiaries organisations provide Blockchain, Machine Learning, Artificial Intelligence, Robotic Process Automation. Fintech
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--Eleventh">
//             <div className="slide-content">
//               <img src="/staffing-images/img11.webp" alt="Staffing Image" />
//               <h2>User research and design</h2>
//               <p>
//               NIAD Australia and its subsidiaries organisations provide User researcher, Service designer, Service Modeler, Interaction designer, Accessibility specialist, inclusive designer
//               </p>
//             </div>
//           </div>
//           <div className="swiper-slide swiper-slide--Tweleve">
//             <div className="slide-content">
//               <img src="/staffing-images/img12.webp" alt="Staffing Image" />
//               <h2>Content and publishing</h2>
//               <p>
//                 NIAD Australia and its subsidiaries organisations provide Content designer, Technical writer, Multimedia specialist (photography, illustration, animation and video)
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="swiper-pagination"></div>
//         <div className="swiper-button-prev" onClick={slideLeft}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </div>
//         <div className="swiper-button-next" onClick={slideRight}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }
import React,{useEffect} from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
      
      <div className="staffing-image-text ">
        <div className="landing-written">
            <div className="landing-logo"></div>
            <div className='landing-written-text'>
              <h2 className='animate-about fade-up-1 active-about'>Staffing Solutions</h2>
              <h3 className='animate-about fade-up-2 active-about'>We and our subordinates provide Staffing services to our clients all over the world. We are one of the trusted company in this sector.</h3>
              </div> 
            <div className="landing-buttons animate-about fade-up-3 active-about">
              <button type="button">Join us</button>
              <button type="button">Our Services</button>
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
          <Link to="/" >Staffing Services</Link>
          </div>
          <div className="indi-servi animate-about fade-up-9">
            <Link to="/">Analytics</Link>
          </div>
          <div className="indi-servi animate-about fade-up-9">
            <Link to="/">Managed IT Services</Link>
          </div>
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