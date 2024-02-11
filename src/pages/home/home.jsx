import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';
const Home = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
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
              <h2>Staffing Solutions, Technology Transformation & Digital Security</h2>
              <h3>Your Trusted Partner in Staffing Solutions, Technology Transformation & Digital Security</h3>
              </div> 
            <div className="landing-buttons">
              <button type="button">Join us</button>
              <button type="button">Our Services</button>
              </div>   
        </div>
      </div>
      <div className="homepage-client-slider">
          <h2>OUR FEDERAL GOVERNMENT CLIENTS</h2>
          <div className="row">
            <div className="col-md-12">
              <Slider {...sliderSettings}>
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
      <div className="homepage-about">
        <h2>Who we are</h2>
        <div className="home-about-info">
          <div className="home-info-text">
            <h1>We are More than just a company</h1>
            <p>At the forefront of industry leadership, NIAD Australia is a driving force committed to meeting the diverse needs of clients in Staffing & Resourcing Solutions, Technology Transformation & Operations, and Digital Security (Cybersecurity) for both Government and esteemed Blue Chip Companies. Our thriving business is anchored in enduring partnerships cultivated over time. Renowned for our unwavering dedication to delivering transparent and quality-driven services, we have emerged as a trusted and preferred supplier for a multitude of clients.</p>
          </div>
          <div className="button-learn">
            <button type="button">Learn More</button>
          </div>
        </div>
        <div className="more-info">
          <div className="more-info-img"></div>
          <div className="more-info-stats"></div>
        </div>
      </div>
    </div>
  )
}
export default Home;