import React,{useEffect} from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';
import Footer from '../../components/footer/footer';
const Home = () => {
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
  const sliderSettings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-page">
      
      <div className="landing-image-text filter">
        <div className="landing-written">
            <div className="landing-logo"></div>
            <div className='landing-written-text'>
              <h2 className='animate-about fade-up-1 active-about'>Staffing Solutions, Technology Transformation & Digital Security</h2>
              <h3 className='animate-about fade-up-2 active-about'>Your Trusted Partner in Staffing Solutions, Technology Transformation & Digital Security</h3>
              </div> 
            <div className="landing-buttons animate-about fade-up-3 active-about">
              <button type="button">Join us</button>
              <button type="button">Our Services</button>
              </div>   
        </div>
      </div>
      <div className="homepage-client-slider">
          <h2 >OUR FEDERAL GOVERNMENT CLIENTS</h2>
          <div className="row">
            <div className="col-md-12">
              <Slider {...sliderSettings} >
                <img className='client-image' src="./clients/cr=w_388,h_194 (1).webp" alt="" srcset="" />
                <img className='client-image' src="./clients/cr=w_388,h_194 (2).webp" alt="" srcset="" />
                <img className='client-image' src="./clients/cr=w_388,h_194 (3).webp" alt="" srcset="" />
                <img className='client-image' src="./clients/cr=w_388,h_194 (4).webp" alt="" srcset="" />
                <img className='client-image' src="./clients/cr=w_388,h_194.webp" alt="" srcset="" />
                <img className='client-image' src="./clients/rs=w_388,cg_true (1).webp" alt="" srcset="" />
                <img className='client-image' src="./clients/rs=w_388,cg_true (2).webp" alt="" srcset="" />
                <img className='client-image' src="./clients/rs=w_388,cg_true,m.webp" alt="" srcset="" />
                <img className='client-image' src="./clients/rs=w_388,cg_true.webp" alt="" srcset="" />
                <img className='client-image' src="./clients/rs=w_388,h_194,cg_true.webp" alt="" srcset="" />
              </Slider>
            </div>
          </div>
      </div>
      <div className="homepage-about" id='homepage-about'>
        <h2 className=' animate-about fade-up-4 '>Who we are</h2>
        <div className="home-about-info">
          <div className="home-info-text landing-buttons animate-about fade-up-5">
            <h1>We are More than just a company</h1>
            <p>At the forefront of industry leadership, NIAD Australia is a driving force committed to meeting the diverse needs of clients in Staffing & Resourcing Solutions, Technology Transformation & Operations, and Digital Security (Cybersecurity) for both Government and esteemed Blue Chip Companies. Our thriving business is anchored in enduring partnerships cultivated over time. Renowned for our unwavering dedication to delivering transparent and quality-driven services, we have emerged as a trusted and preferred supplier for a multitude of clients.</p>
          </div>
          <div className="button-learn " >
            <button type="button" className='animate-about fade-up-6'>Learn More</button>
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
      </div>
      <div className="the-differentiator">
        <h2 className="titles-of-all">The Differentiator</h2>
        <div className="different-boxes">
          <div className="diff-box">
            <h2>Transparent and Cost Effective Services</h2>
            <img src="./diff/cr=w_388,h_194 (1).webp" alt="" srcset="" />
  
          </div>
          <div className="diff-box">
            <h2>Coverage Across ICT Areas</h2>
            <img src="./diff/cr=w_388,h_194 (2).webp" alt="" srcset="" />
          </div>
          <div className="diff-box">
            <h2>Equal opportunity provider for all sections</h2>
            <img src="./diff/cr=w_388,h_194 (3).webp" alt="" srcset="" />
          </div>
          <div className="diff-box">
            <h2>Fully compliant with Local Labour Laws</h2>
            <img src="./diff/cr=w_388,h_194 (4).webp" alt="" />
          </div>
          <div className="diff-box">
            <h2>Specialised in IT Solutions</h2>
            <img src="./diff/cr=w_388,h_194.webp" alt="" srcset="" />
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
      <h2 className='titles-of-all'>OUR CORPORATE CLIENTS & PARTNERS</h2>
      <div className="company-clients">
        <div className="clients-head">

        </div>
        <div className="scrolling-bar">
          <div className="slider">
            <div className="slide-track">
            <div className="slide">
              <img
                src="./corporate/qt=q_81 (1).webp"
                alt=""
              />
              <h2>Microsoft Australia</h2>
              <p>Microsoft is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services  Its best-known software products are the Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. </p>
            </div>
            <div className="slide">
              <img
                src="./corporate/qt=q_81 (2).webp"
                alt=""
              />
              <h2>Tata Communications</h2>
              <p> TCTS is the partner of choice for CSPs globally in building smarter, faster, efficient, and virtualized communication networks. It provides leading business transformation, managed network operations, network outsourcing and consultancy services to telecommunication companies around the world. </p>
            </div>
            <div className="slide">
              <img
                src="./corporate/qt=q_81.webp"
                alt=""
              />
              <h2>Capgemini</h2>
              <p>A global leader in consulting, technology services and digital transformation, Capgemini is at the forefront of innovation to address the entire breadth of clients’ opportunities in the evolving world of cloud, digital and platforms. </p>
            </div>
            <div className="slide">
              <img
                src="./corporate/rs=w_365,h_182.5,cg_true"
                alt=""
              />
              <h2>HP Australia</h2>
              <p>HP are a technology company born of the belief that companies should do more than just make a profit. Their efforts in climate action, human rights, and digital equity prove that they are doing everything to make it so.</p>
              <h2></h2>
            </div>
            <div className="slide">
              <img
                src="./corporate/qt=q_81 (1).webp"
                alt=""
              />
              <h2>Microsoft Australia</h2>
              <p>Microsoft is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services  Its best-known software products are the Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. </p>
            </div>
            <div className="slide">
              <img
                src="./corporate/qt=q_81 (2).webp"
                alt=""
              />
              <h2>Tata Communications</h2>
              <p> TCTS is the partner of choice for CSPs globally in building smarter, faster, efficient, and virtualized communication networks. It provides leading business transformation, managed network operations, network outsourcing and consultancy services to telecommunication companies around the world. </p>
            </div>
            <div className="slide">
              <img
                src="./corporate/qt=q_81.webp"
                alt=""
              />
              <h2>Capgemini</h2>
              <p>A global leader in consulting, technology services and digital transformation, Capgemini is at the forefront of innovation to address the entire breadth of clients’ opportunities in the evolving world of cloud, digital and platforms. </p>
            </div>
            <div className="slide">
              <img
                src="./corporate/rs=w_365,h_182.5,cg_true"
                alt=""
              />
              <h2>HP Australia</h2>
              <p>HP are a technology company born of the belief that companies should do more than just make a profit. Their efforts in climate action, human rights, and digital equity prove that they are doing everything to make it so.</p>
              <h2></h2>
            </div>
            
            
            </div>
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
export default Home;